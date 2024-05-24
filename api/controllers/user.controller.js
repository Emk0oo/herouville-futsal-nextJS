const connection = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const transporterEmail = process.env.MAILER_EMAIL;
const transporterPassword = process.env.MAILER_PASSWORD;

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: transporterEmail,
    pass: transporterPassword,
  },
});

exports.getUsers = (req, res) => {
  const query = "SELECT * FROM utilisateurs";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM utilisateurs WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(results[0]);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { email, password, nom, prenom } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const query =
    "UPDATE utilisateurs SET email = ?, password = ?, nom = ?, prenom = ? WHERE id = ?";
  const params = [email, hashedPassword, nom, prenom, id];

  connection.query(query, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM utilisateurs WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  });
};
