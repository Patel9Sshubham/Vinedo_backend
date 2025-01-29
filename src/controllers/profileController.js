const { uploadToS3 } = require('../services/s3');
const User = require('../models/user');
const { Op } = require('sequelize');

//this api use in both profile setup step and profile update(name, username,bio, profile picture)
const profileSetUp = async (req, res) => {
  const { name, username, bio } = req.body;
  const profilepic = req.file;
  const userId = req.user.id;
    console.log(profilepic);
  try {
    if(username){
        const existingUser = await User.findOne({ where: { username, id: { [Op.ne]: userId } }  });
        if (existingUser) {
        return res.status(400).json({ message: 'Username is already taken.' });
        }
    }

    let profilePicUrl = null;

    if (profilepic) {
      profilePicUrl = await uploadToS3(profilepic);
    }

    const loggedInUser = await User.findOne({ where: { id: userId } });

    const updatedUser = await User.update(
      { name, username, bio, profilePic: profilePicUrl? profilePicUrl:loggedInUser.profilePic },
      { where: { id: userId } }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json({
      message: 'Profile updated successfully.',
      user: { name, username, bio, profilePic: profilePicUrl? profilePicUrl:loggedInUser.profilePic },
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const toggleIsAdult = async (req, res) => {
  const userId = req.user.id; 
  const { isAdult } = req.body;

  try {

      const [updated] = await User.update({ isAdult }, { where: { id: userId } });

      if (!updated) {
          return res.status(404).json({ message: 'User not found.' });
      }

      return res.status(200).json({ message: `User's isAdult status updated to ${isAdult}.` });
  } catch (error) {
      console.error('Error toggling isAdult:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

const updateLinks = async (req, res) => {
  const userId = req.user.id; 
  const { links } = req.body; 

  try {
      if (typeof links !== 'object' || Array.isArray(links)) {
          return res.status(400).json({ message: 'Invalid input. "links" must be an object with key-value pairs.' });
      }

      const [updated] = await User.update({ links }, { where: { id: userId } });

      if (!updated) {
          return res.status(404).json({ message: 'User not found.' });
      }

      const user = await User.findOne({ where: { id: userId } });

      return res.status(200).json({ message: 'Links updated successfully.', links: user.links });
  } catch (error) {
      console.error('Error updating links:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { profileSetUp, toggleIsAdult, updateLinks };