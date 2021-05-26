import { useState } from "react";
import "./Feed.css";
import Post from "./Post/Post";
import TweetBox from "./TweetBox/TweetBox";

const Feed = () => {
  const [posts, setPosts] = useState([])
  
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <Post
        displayName="Humphrey Mutuma"
        username="humphreymutuma7"
        verified
        text="Yoo its working!!!"
        avatar="https://cdn.pixabay.com/photo/2020/05/22/07/46/model-5204225__340.jpg"
        image="https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128__340.jpg"
      />

      {/* posts */}
    </div>
  );
};

export default Feed;
