// src/App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormList from './components/FormList';
import Header from './components/Header';
import { CssBaseline } from '@mui/material';
import { LoaderProvider } from './common/LoaderContext';

function App() {
  return (
    <div className="App">
      <LoaderProvider>
          <CssBaseline />
          <Header />
          <FormList />
          {/* ToastContainer for displaying toasts */}
          <ToastContainer />
      </LoaderProvider>
    </div>
  );
}

export default App;
