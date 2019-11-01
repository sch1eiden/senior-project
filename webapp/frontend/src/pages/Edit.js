import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth';
// import config from '../firebase';

// const storage = config.storage();

const Edit = (props) => {
    const {currentUser} = useContext(AuthContext);
    const [displayName, setDisplayName] = useState('');
    const [photo, setPhoto] = useState();
    // const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        currentUser.updateProfile({
            displayName: displayName,
        })
        props.history.push('/profile');
    }

    return (
        <div id="Edit" className="container">
            <div className="card">
                <div className="card-header">
                    <h1 className="display-4" align="center">Edit Profile</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input name="email" type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input name="name" type="text" className="form-control" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input name="phone" type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <label for="profile">Profile picture</label>
                            <input name="profile" type="file" className="form-control" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Upload Profile" />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit;