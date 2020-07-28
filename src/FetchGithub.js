import React from "react";
import { connect } from "react-redux";
import { fetchGithub } from "./actions";
import { Button, Icon } from "@blueprintjs/core";

const FetchGithub = ({ fetchGithub }) => {
  console.log("fetchGithub", fetchGithub);
  return <div>
            <input className="bp3-input" small type="search" 
            placeholder="Username" dir="auto" />
            
            <Button className="bp3-button" type="button" onClick={fetchGithub}>
              Cargar Perfil  &nbsp;&nbsp;&nbsp;&nbsp; <Icon icon={'inbox-search'} iconSize={20} intent={'success'} />
            </Button>
          </div>;

};

const mapDispatchToProps = dispatch => {
  return {
    fetchGithub() {
      dispatch(fetchGithub());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FetchGithub);
