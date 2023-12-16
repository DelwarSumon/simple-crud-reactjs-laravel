<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\FormData;
use Illuminate\Http\Request;

use function Psy\debug;

class FormDataController extends Controller
{
    public function index()
    {
        return FormData::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        $formData = FormData::create($request->all());
        return response()->json($formData, 201);
    }

    public function show(FormData $formData)
    {
        return $formData;
    }

    public function update(Request $request, FormData $formData)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'message' => 'required|string',
            ]);
            $formData->update([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'message' => $request->input('message'),
            ]);
            return response()->json($formData, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function destroy(FormData $formData)
    {
        $formData->delete();
        return response()->json(null, 204);
    }
}
