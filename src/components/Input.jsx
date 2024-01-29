import React, { useId } from "react";


const Input = React.forwardRef(function Input(
  { lable, type = "text", className = "", ...props },
  ref
) {
  


  const id = useId();
  return (
    
    <div className="w-full">
      {/* means ki if kisi ne lable pass liya hai to hum isko display krayenge nahi to nahi */}
      {lable && 
        <lable className="inline-block mb-1 pl-1" htmlFor={id}>
          {lable} {/* agar label diya hai to hi ye chalega*/}
        </lable>
      }
      {/* 5 ab hmara input ayega */}
      <input 
      type={type} // if user ne input diya hai to ok nahi tio hmara default input yaha pe hai 
      className={`px-3 py-2 rounded-b-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // apni tailwind css classes dalo then aise claseName inject kr do isme taki user bhi apni class daal sake.
    
    ref={ref} 
    // 7 ab jo bhi values hai jo user ne extra pass kari hai uske liye ...props yaha likhlo
    {...props}
    
    id={id} 
      />
    </div> 
  );
});

export default Input;

// jab aap kahi pe hooks use kr rahe hai waha pe arrow function use krne se vo look wise easy lagta hai to use it
