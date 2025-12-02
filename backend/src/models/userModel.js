import db from '../config/db.js';

export const UserModel = {
  async findByEmail(email) {
    const r = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return r.rows[0];
  },

  async findById(id) {
    const r = await db.query('SELECT id, name, email, role, created_at FROM users WHERE id = $1', [id]);
    return r.rows[0];
  },

  async create({ name, email, password, role = 'student' }) {
    const r = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1,$2,$3,$4) RETURNING id, name, email, role, created_at',
      [name, email, password, role]
    );
    return r.rows[0];
  }
};
