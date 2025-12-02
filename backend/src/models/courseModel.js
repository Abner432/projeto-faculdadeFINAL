import db from '../config/db.js';

export const CourseModel = {
  async findAll() {
    const res = await db.query('SELECT * FROM courses ORDER BY created_at DESC');
    return res.rows;
  },

  async findById(id) {
    const res = await db.query('SELECT * FROM courses WHERE id = $1', [id]);
    return res.rows[0];
  },

  async create({ title, slug, description, instructor_id }) {
    const res = await db.query(
      `INSERT INTO courses (title, slug, description, instructor_id) VALUES ($1,$2,$3,$4) RETURNING *`,
      [title, slug, description, instructor_id]
    );
    return res.rows[0];
  },

  async update(id, { title, slug, description }) {
    const res = await db.query(
      `UPDATE courses SET title=$1, slug=$2, description=$3 WHERE id=$4 RETURNING *`,
      [title, slug, description, id]
    );
    return res.rows[0];
  },

  async delete(id) {
    await db.query('DELETE FROM courses WHERE id=$1', [id]);
    return true;
  }
};
