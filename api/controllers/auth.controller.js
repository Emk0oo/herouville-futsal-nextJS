const connection = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.register = (req, res) => {
  const { email, password, nom, prenom } = req.body;
  console.log(email, password, nom, prenom);

  // Query to check if the user already exists
  const checkUserQuery = 'SELECT * FROM utilisateurs WHERE email = ?';

  connection.query(checkUserQuery, [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // If user does not exist, proceed with registration
    const hashedPassword = bcrypt.hashSync(password, 10);
    const registerUserQuery = 'INSERT INTO utilisateurs (email, password, nom, prenom, role_id) VALUES (?, ?, ?, ?, 2)';

    connection.query(registerUserQuery, [email, hashedPassword, nom, prenom], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM utilisateurs WHERE email = ?';

  connection.query(query, [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role_id }, process.env.JWT_SECRET , { expiresIn: '24h' });
    res.json({ token });
  });
};
