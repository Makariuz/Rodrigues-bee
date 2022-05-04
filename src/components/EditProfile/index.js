import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import "./EditProfile.scss";

export function EditProfile() {
  const { user, editUser } = useContext(AuthContext);

  const [editOpen, setEditOpen] = useState(false);
  const [newUserId, setNewUserId] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(newUserId, newUsername);
    setEditOpen(false);

    
  };


  const handleEdit = (user) => {
    setEditOpen(true);
    setNewUserId(user._id)
    setNewUsername(user.username);
/*     setNewEmail(user.email);
    setNewPicture(user.picture);
    setNewPassword(user.password); */
  
  };

  const uploadImage = (file) => {
    return axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/upload`, file)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  const handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("picture", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        setNewPicture(response.path);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  return (
    <div className="profile__edit__wrapper">
      <div className="profile__edit__card">
        <h2>Edit Profile details</h2>
        <button onClick={handleEdit}>open</button>
        <form onSubmit={handleSubmit}>
          <input
            value={newUsername}
            type="text"
            className="username-input"
            placeholder="Enter your username"

            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <input
            type="file"
            name="picture"
            className="pp-input"
            onChange={handleFileUpload}
          />
          <input
            type="password"
            className="password-input"
            placeholder="Enter your password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="submit"> Save changes </button>
        </form>
      </div>
    </div>
  );
}
