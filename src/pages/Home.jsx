import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data.slice(0, 10)))
      .catch(err => console.error("Error fetching posts", err));
  }, []);

  return (
<div className="max-w-5xl mx-auto p-6">
  <h2 className="text-2xl font-bold text-white mb-6">Latest Posts</h2>
  <div className="grid gap-6">
    {posts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
</div>

  );
}

export default Home;
