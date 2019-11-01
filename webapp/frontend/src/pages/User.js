import React, { useContext, useState } from 'react';
import {AuthContext} from '../Auth';
import {Modal} from 'react-bootstrap';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';

const Users = (props) => {
  const {currentUser} = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [displayName, setDisplayName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const [progress, setProgress] = useState(0);

  // const getFile = e => {
  //   let image = e.target.files[0];
  //   console.log('image', image)
  //   // let reader = new FileReader();
  //   // reader.readAsDataURL(image);

  //   // reader.onload=(e)=>{
  //   //   console.warn("img data", e.target.result);
  //   // }
  // }

  // const reauthenticate = (currentPassword) => {
  //   const cred = firebase.auth.EmailAuthProvider.credential(
  //     currentUser.email, currentPassword
  //   );
  //   currentUser.reauthenticateWithCredential(cred);
  // }

  // const changeEmail = (currentPassword, newEmail) => {
  //   reauthenticate(currentPassword).then(() => {
  //     currentUser.updateEmail(newEmail).then(() => {
  //       alert("Email updated!");
  //     }).catch((error) => {console.log(error);});
  //   }).catch((error) => {console.log(error);});
  // }

  const handleUploadStart = () => {
    setIsUpload(true);
    setProgress(0);
  }

  const handleProgress = progress => {
    setProgress(progress);
  }

  // const handleUploadError = error => {
  //   setIsUpload(false);
  //   console.error(error);
  // }

  const handleUploadSuccess = filename => {
    setPhoto(filename);
    setProgress(100);
    setIsUpload(false);
    firebase.storage().ref('img').child(photo).getDownloadURL().then(url => setPhotoURL(url));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('provider data', currentUser.providerData)
    if (displayName) {
      currentUser.updateProfile({
        displayName: displayName,
      }).then(() => {
        alert('update name success');
      })
    }
    if (photoURL) {
      currentUser.updateProfile({
        photoURL: photoURL,
      }).then(() => {
        alert('update profile success');
      })
    }
    // if (email) {
    //   currentUser.updateEmail(email).then(() => {
    //     alert('update email success');
    //   }).catch((error) => {
    //     alert('cannot update email');
    //   })
    // }


    props.history.push('/profile');
  }

  // const reauthenticate = (currentPassword) => {
  //   const user = firebase.auth().currentUser;
  //   const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
  //   return user.reauthenticateAndRetrieveDataWithCredential(cred);
  // }

  // const changeEmail = (currentPassword, newEmail) => {
  //   reauthenticate(currentPassword).then(() => {
  //     const user = firebase.auth().currentUser;
  //     user.updateEmail(newEmail).then(() => {
  //       console.log("Email updated");
  //     }).catch((error) => { console.log(error); });
  //   }).catch((error) => { console.log(error); });
  // }

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
                  <img src={currentUser.photoURL} className="img-fluid" alt="responsive" width="50%" />
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
          <button type="button" className="btn btn-warning" onClick={handleShow}>Edit</button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input name="name" type="text" className="form-control" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Name" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="profile">Profile picture</label>
                  {isUpload && <p>Progress: {progress}</p>}
                  {photoURL && <img src={photoURL} alt="responsive" width="100%" />}
                  <br />
                  <FileUploader
                    accept="img/*"
                    name="profile"
                    randomizeFilename
                    storageRef={firebase.storage().ref("img")}
                    onUploadStart={handleUploadStart}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />
                </div>
                <button type="submit" className="btn btn-success mr-2" onClick={handleClose}>Confirm</button>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
              </form>
            </Modal.Body>
          </Modal>
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

// <div className="form-group">
// <label for="phone">Phone Number</label>
// <input name="phone" type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
// </div>

// <div className="col-6">
// <div className="form-group">
//     <label for="email">Email</label>
//     <input name="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
// </div>
// </div>
// <input name="profile" type="file" className="form-control" onChange={(e)} placeholder="Upload Profile" />