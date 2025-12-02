import { CourseModel } from '../models/courseModel.js';

export const CoursesController = {
  async list(req, res, next) {
    try {
      const courses = await CourseModel.findAll();
      res.json(courses);
    } catch (err) { next(err); }
  },

  async get(req, res, next) {
    try {
      const course = await CourseModel.findById(req.params.id);
      if (!course) return res.status(404).json({ error: 'Course not found' });
      res.json(course);
    } catch (err) { next(err); }
  },

  async create(req, res, next) {
    try {
      const payload = req.body;
      const created = await CourseModel.create({ ...payload, instructor_id: req.user?.id || null });
      res.status(201).json(created);
    } catch (err) { next(err); }
  },

  async update(req, res, next) {
    try {
      const updated = await CourseModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) { next(err); }
  },

  async remove(req, res, next) {
    try {
      await CourseModel.delete(req.params.id);
      res.status(204).send();
    } catch (err) { next(err); }
  }
};
