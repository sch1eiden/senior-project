import React, {useContext} from 'react';
import {AuthContext} from './Auth';

const App = ({history}) => {
  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
  return (
    <div>
      <h3 className="display-3">
        Welcome
      </h3>
      <h4 className="display-4">
        {currentUser.displayName}
      </h4>
    </div>
  );
  } else {
    return (
      <div>
        <h3 className="display-4">
          Welcome
        </h3>
        <p className="display-4">
          You are not logged in yet, please sign in here
        </p>
        <button className="btn btn-primary" onClick={history.push('/login')} >Sign In</button>
      </div>
    )
  }
};

export default App;
