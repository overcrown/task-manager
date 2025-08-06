import { StrictMode } from 'react' // Ruu in background to help developers find the error, ruun in development only, not in production
import { createRoot } from 'react-dom/client'  //  Imports the createRoot function from the React DOM client.
import App from './App.jsx'
import './index.css' // The css included that way will load styles across all application
import './App.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './pages/TaskPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/task',
    element: <TaskPage />
  }
]);

// It's rendering the react app into div root of HTML Index
createRoot(document.getElementById('root')).render(

  // It's rendering the component 'App', the first letter has to be uppercase to differ from html tags
  //  This is the root component of the application. It's where the app begins rendering.
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)
