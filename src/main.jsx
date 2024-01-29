import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout,  } from "./components/index.js";
import { Signup, Login, AllPosts, EditPost, Post, Home, AddPost } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        // is element ko hum render krne k liye parenthesis use karenge iska matlab hai ki apko 2 3 element ya div send krna hai to aap kr skte hai but hum.
        //  Ab har ek layout ko AuthLayout me wrap karenge Protected k liye.
        //  ab  hum isme Login component render karenge but yaha pe data hum "authentication" manually pass karenge login k liye hume authentication nahi chahiye iss liye false hoga ye
        //
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            {/* authentication true likho ya sirf authentication likho ek hi baat hai*/}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug", // id ki jagha slug
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
        <AuthLayout authentication>
            <Post />
        </AuthLayout>
        )
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
);
