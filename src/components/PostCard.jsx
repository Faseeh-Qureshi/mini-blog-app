function PostCard({ post }) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
        <h3 className="text-xl text-white font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-300 leading-relaxed">{post.body}</p>
      </div>
    );
  }
  
  
  export default PostCard;
  