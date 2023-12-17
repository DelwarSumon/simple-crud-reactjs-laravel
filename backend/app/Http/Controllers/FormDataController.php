<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\FormData;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
class FormDataController extends Controller
{
    public function index()
    {
        return FormData::all();
    }

    public function store(Request $request)
    {   
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'message' => 'required|string',
            ]);

            $formData = FormData::create($request->all());
            return response()->json(['message' => 'Data saved successfully.', 'data' => $formData], 201);
        } catch (ValidationException $e) {
            // Handle validation errors
            return response()->json(['message' => $e->getMessage(), 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            return FormData::findOrFail($id);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'message' => 'required|string',
            ]);
            $formData = FormData::find($id);
            $formData->fill($request->all())->save();
            return response()->json(['message' => 'Data saved successfully.', 'data' => $formData], 200);
        } catch (ValidationException $e) {
            // Handle validation errors
            return response()->json(['message' => $e->getMessage(), 'errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            FormData::destroy($id);
            return response()->json(['message' => 'Data deleted successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
