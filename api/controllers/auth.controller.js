const connection = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { email, password, nom, prenom } = req.body;
  console.log(email, password, nom, prenom)
  const hashedPassword = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO utilisateurs (email, password, nom, prenom, role_id) VALUES (?, ?, ?, ?, 2)';

  connection.query(query, [email, hashedPassword, nom, prenom], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'User registered successfully' });
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

    const token = jwt.sign({ id: user.id, role: user.role_id }, 'your_jwt_secret', { expiresIn: '24h' });
    res.json({ token });
  });
};
