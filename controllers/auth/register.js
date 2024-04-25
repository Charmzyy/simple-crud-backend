const bcrypt = require("bcrypt");
const { User } = require("../../controllers");

const register = async (req, res) => {
  try {
    if(req.body.password.length < 8){
        return res.status(400).json({message:"Password must be atleast 8 characters long"})
    }
    const hashedPassword = await bcrypt.hash(req.body.password,10);

    const user = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = register;
