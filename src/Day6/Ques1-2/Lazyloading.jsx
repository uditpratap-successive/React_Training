//1.Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense
//features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import { lazy, Suspense } from "react";
import ErrorBoundary from "./Errorboundary";
import React from "react";
import Home from "./Home";
// const Home = lazy(() => import("./Home"));
const Contactus = lazy(() => import("./Contactus"));
const Login = lazy(() => import("./Login"));

const Lazyloading = () => {
  return (
    <div>
      <Suspense fallback={<Home/>}>
        <ErrorBoundary>
        <Contactus/>
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<h1>wait </h1>}>
        <ErrorBoundary>
          <Contactus/>
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<h1>'Please wait Login page is loading'</h1>}>
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default Lazyloading;
