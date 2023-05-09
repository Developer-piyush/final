// import React from "react";
// import "./Widgets.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";
// import SearchIcon from "@material-ui/icons/Search";

// function Widgets() {
//   return (
//     <div className="widgets">
//       <div className="widgets__input">
//         <SearchIcon className="widgets__searchIcon" />
//         <input placeholder="Search Twitter" type="text" />
//       </div>

//       <div className="widgets__widgetContainer">
//         <h2>What's happening</h2>

//         <TwitterTimelineEmbed
//           sourceType="profile"
//           screenName="kmmtmm92"
//           options={{ height: 800 }}
//         />

//         <TwitterShareButton
//           url={"https://facebook.com/cleverprogrammer"}
//           options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Widgets;'


import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Decentranet" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What is Decentranet?</h2>
        <p>Decentranet is a decentralized social media platform that empowers users to connect and share content without the need for a central authority. With Decentranet, users have control over their data and can engage in a community that values privacy, transparency, and innovation.</p>
      </div>
    </div>
  );
}

export default Widgets;
