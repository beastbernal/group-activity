import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

const Profiles = ({ profiles = [] }) => {
  return (
    <section className="Tweets">
      {profiles.map(profile => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </section>
  );
};

const mapStateToProps = ({ profiles }) => ({ profiles });

export default connect(mapStateToProps)(Profiles);
