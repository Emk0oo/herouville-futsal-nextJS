const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const checkToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)

  if (!token) {
    console.log(token)

    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(token)

      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    if (decoded.role !== 1) {
      console.log("not an admin")
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = checkToken;
