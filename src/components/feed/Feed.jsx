import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:4000/api/posts/timeline/63eabb35f4b5ba698ddf86ae");
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p => (        
        <Post key={p._id} post={p}/>
        )))}
      </div>
    </div>
  );
};

export default Feed;
