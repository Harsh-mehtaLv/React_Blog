import { useState, useEffect } from "react";
import React from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents); // error spelling mistake solved in documents
      }
    });
  });
  return (
    <div className="w-full py-8">
      <Container>
        {/* {posts.map((post) => (
                <PostCard key={post.$id} post={post} />
            ))} */}
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} /> {/* error solved post was wrongly given here post={post}*/}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
