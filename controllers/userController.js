const asyncHandler =  require("express-async-handler");

//@desc Register user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc current user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser
}