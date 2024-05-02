import { Router } from 'express';
import AppController from '../controllers/AppController';
import studentsController from '../controllers/StudentsController';

const router = Router();

router.get('/', AppController.getHomepage);
router.get('/students', studentsController.getAllStudents);
router.get('/students/:major', studentsController.getAllStudentsByMajor);

export default router;
