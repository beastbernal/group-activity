import React from "react";

const Profile = ({ profile }) => {
  return (
    <article className="Tweet">
      <p>{profile.name}</p>
    </article>
  );
};

export default Profile;
