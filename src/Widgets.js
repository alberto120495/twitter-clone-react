import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <h2>Widgets</h2>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"472127020579557376"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="betitomx04"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/betito.mix"}
          options={{ text: "#reactjs is awesome", via: "betitomx04" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
