import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {SearchContextProvider} from "./context/SearchContext.js"
import  {AuthContextProvider} from "./context/AuthContext.js"
import './index.css';
// su dung react -native
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
   </AuthContextProvider>
  </React.StrictMode>
);
