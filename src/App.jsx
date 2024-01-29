import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth_service";
import { login, logout } from "../store/authSlice";
// ----------------------- ERROR fixed ----------------------------------
// import Header from "./components/index" // this is error component was not rendering
// import Foooter from "./components/index" // this is error component was not rendering
import { Header, Footer } from "./components/index.js"; // this is solution of it
import {Outlet} from "react-router-dom"
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); // 1 isme hmare page ke starting me loading state true hogi and useEffect data fetch kr raha hoga jab vo fetch kr lega then loading state false hogi
  //  2 ab hume authService import krni hai after useDispach
  const dispatch = useDispatch();
  // 3 ab jaise hi ye application load ho to ek useEffect ko and uss se ask karo ki aapa logged in ho ya nahi
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          // 4 import login and logout from store authSlice
          dispatch(login({ userData }));
        } else {
          dispatch(logout()); // if login nahi mila hai to logpou show hoga
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // {/* 5 Ab yaha pe return hum hmare hisaab se karenge means conditional rendering. if !no loading ?else  */}
  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block ">
          {/* 6 here call components header and footer */}
          <Header />
          {/* <main> */}
          TODO:   <Outlet />
          {/* 7 set provider in main.jsx */}
          {/* </main> */}
          <Footer />
        </div>
      </div>
    </>
  ) : null;
}

export default App;

// /*

//   return !loading ? (
//     <>
//       <div className="min-h-screen flex -flex-wrap content-between bg-gray-400">
//         <div className="w-full block">
//
//       <Header />
//
//       <Footer />
//         </div>
//       </div>
//     </>
//   ) : null;

// */
