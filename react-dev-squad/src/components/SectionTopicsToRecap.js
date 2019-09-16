import React from "react";
import PostIt from "./PostIt";

function SectionTopicsToRecap(props) {
  return (
    <div className="section-to-recap">
      <h2>Topics to recap</h2>
      <div id="topics-wrapper">
        <PostIt color="pink">Debugging Tool</PostIt>
        <PostIt color="orange">Debugging Tool</PostIt>
        <PostIt color="blue">Debugging Tool</PostIt>
      </div>
    </div>
  );
}

export default SectionTopicsToRecap;
