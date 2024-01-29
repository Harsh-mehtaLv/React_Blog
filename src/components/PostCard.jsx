import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({
  // 3 Ab iss Postcard ko diaplay krane k liye hume kuch props pass krne honge jo humko sidha querry lgane pe appwrite si mil jayega
  $id,
  title,
  featuredImage,
}) {
  //1 AB hume yaha pe info bhi chahiye jo li appwriteService se aayegi so usko import kro. ye hume iss liye lene pada kyuki hume yaha pe ek querry lgani hogi and ye service hmari querry laga degi
  // 2 ab Link import kro ye bhi use hoga

  return (
    <Link to={`/post/${$id}`}>
      {" "}
      {/* appwrite me id $id hoti hai*/}
      {/* ab aage sari css hai */}
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            {/* yaha pe hum appwrite ki service ka getfilepreview me featuredimage denge  */}
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
            className="rounded-xl" />

        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
