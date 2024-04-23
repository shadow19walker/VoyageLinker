/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const LazyConnexion = lazy(() => import('./pages/Connexion'))
const LazySignup = lazy(() => import('./views/Connexion/Signup'))
const LazyLogin = lazy(() => import('./views/Connexion/Login'))


const LazyNotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter ([
  {
    path: '/',
    element: (
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyConnexion/>
      </Suspense>
    ),
    children:[
      {
        path: '/',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLogin/>
          </Suspense>
        )
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/"/>
          </Suspense>
        )
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazySignup/>
          </Suspense>
        )
      },
    ]
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyNotFound/>
      </Suspense>
    )
  }
])

export default router