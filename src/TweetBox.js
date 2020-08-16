import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button, Input } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Alberto Pimentel",
      username: "albertoPimentel",
      avatar:
        "https://instagram.fmex12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104316442_2581754505473564_117038853741968687_n.jpg?_nc_ht=instagram.fmex12-1.fna.fbcdn.net&_nc_ohc=cqtRGVbe6dUAX_jbpar&oh=775cd39dfed8804d7f87a260088f5640&oe=5F5EF7CA",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://instagram.fmex12-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104316442_2581754505473564_117038853741968687_n.jpg?_nc_ht=instagram.fmex12-1.fna.fbcdn.net&_nc_ohc=cqtRGVbe6dUAX_jbpar&oh=775cd39dfed8804d7f87a260088f5640&oe=5F5EF7CA" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
