import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css'
import store from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { hydrate } from 'react-dom';
// import { createPageRender } from 'vite-plugin-ssr';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import { AuthProvider } from './context/AuthContext.jsx';
// import './index.css';
// import store from './Redux/store.js';

// const { getPage } = createPageRender();

// // Usa hydrate directamente, no createRoot
// hydrate(
//   <React.StrictMode>
//     <AuthProvider>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App {...getPage()} />
//         </BrowserRouter>
//       </Provider>
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

