import { Avatar, Button } from "@material-ui/core";
import { useState } from "react";
import db from "../../../firebase";
import "./TweetBox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Humphrey Mutuma",
      username: "HumphreyMutuma7",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar src="https://cdn.pixabay.com/photo/2021/05/21/16/58/woman-6271553_960_720.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening? "
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL "
          type="text"
        />
        {tweetMessage ? (
          <Button
            onSubmit={handleSubmit}
            type="submit"
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>
        ) : (
          <Button
            onSubmit={handleSubmit}
            type="submit"
            className="tweetBox__tweetButtonDisabled"
            disabled
          >
            Tweet
          </Button>
        )}
        
      </form>
    </div>
  );
};

export default TweetBox;
