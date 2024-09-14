import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom'; 
import { AuthProvider } from '@propelauth/react';
import App from './App';
import YourApp from './Pages/YourApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Auth URL:', import.meta.env.VITE_AUTH_URL);

root.render(
  <React.StrictMode>
    <AuthProvider authUrl={import.meta.env.VITE_AUTH_URL}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
