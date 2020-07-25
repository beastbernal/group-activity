import React from "react";

const Tweet = ({ tweet }) => {
  return (
    <article className="Tweet">
      <p>{tweet.title}</p>
    </article>
  );
};

export default Tweet;
