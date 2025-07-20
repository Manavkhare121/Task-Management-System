import React, { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../../Context/ProfileContext";
import Arrow_icon from "../../assets/Arrow icon.png";
import "./Profile.css";

const Profile = () => {
  const { profiles, setProfiles } = useContext(ProfileContext); 

  const [showFields, setShowFields] = useState({
    Name: false,
    Role: false,
    Number: false,
    Email_Id: false,
  });

  const [ProfileData, setProfileData] = useState({
    Name: "",
    Role: "",
    Number: "",
    Email_Id: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleArrowClick = (field) => {
    setShowFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...ProfileData, [name]: value });
  };

  const handleAddOrEdit = () => {
    if (isEditing) {
      const updated = [...profiles];
      updated[editIndex] = ProfileData;
      setProfiles(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setProfiles([...profiles, ProfileData]);
    }
    setProfileData({ Name: "", Role: "", Number: "", Email_Id: "" });
    setShowFields({ Name: false, Role: false, Number: false, Email_Id: false });
  };

  const handleEdit = (index) => {
    setProfileData(profiles[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = profiles.filter((_, i) => i !== index);
    setProfiles(updated);
  };

  return (
    <>
      <div className="maincontent">
        <div className="content-section">
          <div className="above-part">
            <p>Add Profile</p>
          </div>
          <div className="bottom-part-Profile">
            {["Name", "Role", "Number", "Email_Id"].map((field) => (
              <div className="whole-section" key={field}>
                <div className={`box ${showFields[field] ? "active" : ""}`} >
                  <div className="box-header" onClick={() => handleArrowClick(field)}>
                    <h1 >{field}</h1>
                    <img
                      src={Arrow_icon}
                      alt=""
                      className={`arrow-icon ${
                        showFields[field] ? "rotate" : ""
                      }`}
                      />
                  </div>
                  {showFields[field] && (
                    <input
                      type="text"
                      name={field}
                      value={ProfileData[field]}
                      onChange={handleChange}
                      placeholder={`Enter ${field}`}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="add-icon" onClick={handleAddOrEdit}>
              <p>{isEditing ? "Update" : "Add"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="below-part">
        <div className="headings">
          <div className="table-menu">Employee Name</div>
        <div className="table-menu">Role</div>
        <div className="table-menu">Phone Number</div>
        <div className="table-menu">Email Id</div>
        <div className="table-menu">Options</div>
        </div>
        <div className="profilescroll">
        {profiles.map((profile, index) => (
          <div className="below-part hidde" key={index}>
            <div className="table-menu">{profile.Name}</div>
            <div className="table-menu">{profile.Role}</div>
            <div className="table-menu">{profile.Number}</div>
            <div className="table-menu">{profile.Email_Id}</div>
            <div className="table-menu">
              <div className="options-icon">
                <button className="add-icon" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button
                  className="add-icon"
                  onClick={() => handleDelete(index)}
                  style={{ backgroundColor: "#DC143C" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      
    </>
  );
};

export default Profile;
