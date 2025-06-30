import React, { useState } from 'react';
import Arrow_icon from '../../assets/Arrow icon.png';
import './Profile.css';

const Profile = () => {
  const [showFields, setShowFields] = useState({
    Name: false,
    Role: false,
    Number: false,
    Email_Id: false,
  });

  const [ProfileData, setProfileData] = useState({
    Name: '',
    Role: '',
    Number: '',
    Email_Id: '',
  });

  const [Profiles, setProfiles] = useState([]);
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
      const updatedProfiles = [...Profiles];
      updatedProfiles[editIndex] = ProfileData;
      setProfiles(updatedProfiles);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setProfiles([...Profiles, ProfileData]);
    }
    setProfileData({ Name: '', Role: '', Number: '', Email_Id: '' });
    setShowFields({ Name: false, Role: false, Number: false, Email_Id: false });
  };

  const handleEdit = (index) => {
    setProfileData(Profiles[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProfiles = Profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  return (
    <>
      <div className='maincontent'>
        <div className="content-section">
          <div className="above-part">
            <p>Add Profile</p>
          </div>
          <div className="bottom-part">

           
            <div className="whole-section">
              <div className="box" onClick={() => handleArrowClick('Name')}>
                <h1>Name</h1>
                <img src={Arrow_icon} alt="" height="5px" />
              </div>
              <div className="input">
                {showFields.Name && (
                  <input
                    type="text"
                    name="Name"
                    value={ProfileData.Name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                  />
                )}
              </div>
            </div>

            
            <div className="whole-section">
              <div className="box" onClick={() => handleArrowClick('Role')}>
                <h1>Role</h1>
                <img src={Arrow_icon} alt="" height="5px" />
              </div>
              <div className="input">
                {showFields.Role && (
                  <input
                    type="text"
                    name="Role"
                    value={ProfileData.Role}
                    onChange={handleChange}
                    placeholder="Enter role"
                  />
                )}
              </div>
            </div>

            
            <div className="whole-section">
              <div className="box" onClick={() => handleArrowClick('Number')}>
                <h1>Number</h1>
                <img src={Arrow_icon} alt="" height="5px" />
              </div>
              <div className="input">
                {showFields.Number && (
                  <input
                    type="text"
                    name="Number"
                    value={ProfileData.Number}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                )}
              </div>
            </div>

            
            <div className="whole-section">
              <div className="box" onClick={() => handleArrowClick('Email_Id')}>
                <h1>Email_Id</h1>
                <img src={Arrow_icon} alt="" height="5px" />
              </div>
              <div className="input">
                {showFields.Email_Id && (
                  <input
                    type="text"
                    name="Email_Id"
                    value={ProfileData.Email_Id}
                    onChange={handleChange}
                    placeholder="Enter email ID"
                  />
                )}
              </div>
            </div>

          
            <div className="add-icon" onClick={handleAddOrEdit}>
              <p>{isEditing ? 'Update' : 'Add'}</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="below-part">
        <div className="table-menu">Employee Name</div>
        <div className="table-menu">Role</div>
        <div className="table-menu">Phone Number</div>
        <div className="table-menu">Email Id</div>
        <div className="table-menu">Options</div>
      </div>

      <div className="profilescroll">
        
      {Profiles.map((profile, index) => (
        <div className="below-part hidde" key={index}>
          <div className="table-menu">{profile.Name}</div>
          <div className="table-menu">{profile.Role}</div>
          <div className="table-menu">{profile.Number}</div>
          <div className="table-menu">{profile.Email_Id}</div>
          <div className="table-menu">
            <div className="options-icon">
              <button className="add-icon" onClick={() => handleEdit(index)}>Edit</button>
              <button className="add-icon" onClick={() => handleDelete(index)} style={{ backgroundColor: '#DC143C' }}>Delete</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Profile;

