import React, { useContext } from 'react';
import {AuthContext} from '../Auth';

const Users = (props) => {
  const {currentUser} = useContext(AuthContext);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [photoURL, setPhotoURL] = useState('');

  // const handleUpdateProfile = () => {
  //   const user = config.auth().currentUser;
  //   user.updateProfile({
  //     displayName: name,
  //     photoURL: photoURL,
  //   }).then(() => {
  //     alert()
  //   })
  // }
  
  const handleOnLogIn = () => {
      props.history.push('/login');
  }
  const handleOnSignUp = () => {
      props.history.push('/signup');
  }



  if (currentUser) {
    return (
        <div id="Users" className="container-fluid">
          <div className="card">
            <h3 className="display-4" align="center">Profile</h3>
            <div className="row">
              <div className="col-sm-6">
                <h5>Picture</h5>
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} className="img-fluid" alt="responsive" />
                ) : (
                  <p>You didn't add your photo yet</p>
                )}
              </div>
              <div className="col-sm-6">
                <h5>Name</h5>
                {currentUser.displayName ? (
                  <p>{currentUser.displayName}</p>
                ) : (
                  <p>You didn't add your name yet</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h5>Phone Number</h5>
                {currentUser.phoneNumber ? (
                  <p>{currentUser.phoneNumber}</p>
                ) : (
                  <p>You didn't add your phone number yet</p>
                )}
              </div>
              <div className="col-sm-6">
              <h5>Email</h5>
                <p>{currentUser.email}</p>
              </div>
            </div>
          </div>
        </div>
    );
  } else {
    return (
      <div className="container-fluid" id="Users" align="center">
          <h3 className="display-4">Profile</h3>
          <p align="center">You didn't sign in yet</p>
          <button className="btn btn-primary" onClick={handleOnLogIn}>Sign In</button>
          <p align="center">Didn't have account yet?</p>
          <button className="btn btn-secondary" onClick={handleOnSignUp}>Sign Up</button>
      </div>
    );
  }

}
export default Users