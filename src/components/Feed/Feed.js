import "./Feed.css";
import Post from "./Post/Post";
import TweetBox from "./TweetBox/TweetBox";

const Feed = () => {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <Post />

      {/* posts */}
    </div>
  );
};

export default Feed;
