import React from "react";
import { Container, Logo, LogoutBtn } from "../index";  
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 
// import { nanoid } from "@reduxjs/toolkit"; 

const Header = () => {
  
  const authStatus = useSelector((state) => state.auth.status); 

  
  const navigate = useNavigate();

  
  const navItems = [
    {
      name: "Home",
      slug: "/", // means ki url kaha pe ja rha hai. ye url hai jisko humne slug name diya hai aap url bhi de skte ho
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // means ki active auth status pe depend karega. Ye active rahega ya nahi vo hum authStatus se ask karenge jo humne upar authStatus me useSelector ko use kr ke puch liya hai
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus, // means ki active auth status pe depend karega
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to='/'>
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto"> {/*// navItem me har ek item milega
            // Ab yha pe hum check krna chate hai ki har item active hai ya nahi uss basis pe hum kam karenge .*/}
            {navItems.map((item) => 
            item.active ? (
              // ye cheez jo repeat ho rahi hai jo html element repeat ho raha hai uspe hum key lagate hai 
              <li key={item.name}>  {/*nanoid() try this too in name's place*/}
              {/* ab yaha pe hum button layenge isme hi sara ka sara navigation wala kam hoga. ab isme kuch properties likho nahi to ye kahi url pe nahi jayega */}
              <button
              onClick={() => navigate(item.slug)} // isme hum argument pass karenge ki kaha pe leke jana hai
              className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >{item.name}</button>
              </li>
            ) : null
            )}
            {/* LogoutBtn */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )} {/* yaha pe if authStatus true hoga to hi () ye cheez hogi nahi to nahi hogi */}
            {/* ab hum common button design karenge jaha pe bhi hume button use krna hoga hum use kr lenge */}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
