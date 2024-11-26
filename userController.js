const getUserData = (req, res) => {
    res.json({ message: `Welcome, ${req.user.role}` });
  };
  
  module.exports = { getUserData };
  