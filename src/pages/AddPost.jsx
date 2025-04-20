import React, { useState } from "react";
import PostForm from "../components/PostForm";

function AddPost() {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Post:", formData);
    setFormData({ title: "", body: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Create a New Post</h2>
      <PostForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddPost;
