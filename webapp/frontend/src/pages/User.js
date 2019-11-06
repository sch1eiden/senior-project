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
  const [photo, setPhoto] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUploadStart = () => {
    setIsUpload(true);
    setProgress(0);
  }

  const handleProgress = progress => {
    setProgress(progress);
  }

  const handleUploadSuccess = filename => {
    setPhoto(filename);
    setProgress(100);
    setIsUpload(false);
    firebase.storage().ref('img').child(photo).getDownloadURL().then(url => setPhotoURL(url));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    window.location.reload();
  }

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
              <div className="col-sm-12">
                <h5>Picture</h5>
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} className="img-fluid" alt="responsive" width="30%" />
                ) : (
                  <p>You didn't add your photo yet</p>
                )}
              </div>
              <div className="col-sm-12">
                <h5>Name</h5>
                {currentUser.displayName ? (
                  <p>{currentUser.displayName}</p>
                ) : (
                  <p>You didn't add your name yet</p>
                )}
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
export default Users;