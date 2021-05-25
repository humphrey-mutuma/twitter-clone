import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

const Post = ({
  displayName,
  username,
  verified,
  // timestamp,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          alt="user photo"
          src="https://cdn.pixabay.com/photo/2020/05/22/07/46/model-5204225__340.jpg"
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Humphrey Mutuma
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" /> 
                @humphreymutuma7
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p> Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795128__340.jpg"
          alt="user img"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
