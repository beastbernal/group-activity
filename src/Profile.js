import React from "react";
import { Button, ButtonGroup, Divider, H5, Switch } from "@blueprintjs/core";

const Profile = ({ profile }) => {
  return (
    <article className="Tweet">
      <img src={profile.owner.avatar_url} alt="Avatar Dev" className="Avatar"></img>
      <p><strong>Project: &nbsp;&nbsp;&nbsp;&nbsp;</strong>{profile.name}</p>
      <ButtonGroup minimal={true}>
          <Divider />
          <Button text={'Creado: ' + profile.created_at} className="bt-desc" />
          <Divider />
          <Button text={'url: ' + profile.git_url} className="bt-desc"/>
          <Divider />
          <Button text={"Lenguaje: " + profile.language } className="bt-desc"/>
          <Divider />
          <Button text={"Privado: "} className="bt-desc">
            <Switch checked={profile.private} disabled/>
          </Button>  
          <Divider />
      </ButtonGroup>
    </article>
  );
};

export default Profile;
