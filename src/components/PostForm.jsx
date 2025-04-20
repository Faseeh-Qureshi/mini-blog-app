function PostForm({ formData, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md"
    >
      <div>
        <label className="block mb-1 text-gray-300 font-medium">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={onChange}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter post title"
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-300 font-medium">Body</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={onChange}
          rows="6"
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your content here..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium"
      >
        Submit Post
      </button>
    </form>
  );
}

export default PostForm;
