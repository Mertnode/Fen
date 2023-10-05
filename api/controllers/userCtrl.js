const bcrypt = require("bcrypt");
const User = require("../models/users/userSchema");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")
exports.createUser = async (req, res) => {
  const { name, surname, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı eklenirken bir hata oluştu " });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Kullanıcı bulunamadı" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Sifre Hatali" });
    }
    const secretKey = crypto.randomBytes(32).toString("hex");
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ email,token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu Hatasi" });
  }
};
