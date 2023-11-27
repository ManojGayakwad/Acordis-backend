const User = require('../../models/User/UserModel.js');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { Username, Password } = req.body;
    let user = await User.findOne();
    const hashedPassword = await bcrypt.hash(Password, 10);
    user = new User({
      Username,
      Password: hashedPassword,
    });
    await user.save();
    return res.status(200).json({ message: "Registration successful." });

  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred during registration." });
  }
};

module.exports = registerUser;