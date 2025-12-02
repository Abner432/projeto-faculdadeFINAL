import express from 'express';
import { CoursesController } from '../controllers/coursesController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', CoursesController.list);
router.get('/:id', CoursesController.get);
router.post('/', authMiddleware, CoursesController.create);
router.put('/:id', authMiddleware, CoursesController.update);
router.delete('/:id', authMiddleware, CoursesController.remove);

export default router;
