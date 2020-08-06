import React, { useState }  from "react";
import { connect } from "react-redux";
import { fetchGithub } from "./actions";
import { Button, Icon, Alert } from "@blueprintjs/core";

const FetchGithub = ({ fetchGithub }) => {
  const [username, setUsername] = useState('beastbernal');
  const [isOpenError, setIsOpenError] = useState(false);

  setIsOpenError(false);
  
  const changeUsername = event => {
    setUsername(event.target.value);
  } 


  console.log("fetchGithub", fetchGithub);
  return <div>
            <input className="bp3-input" small type="search" 
            placeholder="Username" dir="auto" value={username}
            onChange={(event) => changeUsername(event)}/>
            
            <Button className="bp3-button" type="button" onClick={() => fetchGithub(username)}>
              Cargar Perfil  &nbsp;&nbsp;&nbsp;&nbsp; <Icon icon={'inbox-search'} iconSize={20} intent={'success'} />
            </Button>
            <Alert confirmButtonText="Aceptar" isOpen={isOpenError}>
                <p>
                    Debe proporcionar un nombre de usuario valido
                </p>
            </Alert>
          </div>;

};

const mapDispatchToProps = dispatch => {
  return {
    fetchGithub(username) {
      dispatch(fetchGithub(username));
      // if(!!username && username.length > 0){
      // } else {
      //   // setIsOpenError(true);
      // }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FetchGithub);
