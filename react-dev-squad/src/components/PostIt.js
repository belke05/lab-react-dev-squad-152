import React from "react";

function PostIt(props) {
  return (
    <div className="post-it" style={{ backgroundColor: props.color }}>
      <p>{props.children}</p>
      <span className="black"></span>
      <span className="white"></span>
    </div>
  );
}

export default PostIt;
