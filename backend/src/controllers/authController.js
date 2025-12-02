import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserModel } from '../models/userModel.js';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const AuthController = {
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });

      const existing = await UserModel.findByEmail(email);
      if (existing) return res.status(400).json({ error: 'Email already registered' });

      const hash = await bcrypt.hash(password, 10);
      const user = await UserModel.create({ name, email, password: hash });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.status(201).json({ user, token });
    } catch (err) { next(err); }
  },

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

      const user = await UserModel.findByEmail(email);
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });

      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (err) { next(err); }
  }
};
