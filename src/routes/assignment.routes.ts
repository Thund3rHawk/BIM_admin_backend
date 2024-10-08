import express from 'express'
import { getAssignment } from '../controller/assignment_and_assesments/assignmentCreation/getAssignment.controller';
import { createAssignment } from '../controller/assignment_and_assesments/assignmentCreation/createAssignment.controller';
import { editAssignment } from '../controller/assignment_and_assesments/assignmentCreation/editAssignment.controller';
import { deleteAssignment } from '../controller/assignment_and_assesments/assignmentCreation/deleteAssignment.controller';

const router = express.Router();

// Get Assignment route
router.route('/get').get(getAssignment);

// Create Assignment route
router.route('/create').post(createAssignment);

// Edit Assignment route
router.route('/edit/:assignmentId').post(editAssignment);

// Delete Assignment route
router.route('/delete/:assignmentId').post(deleteAssignment);

export default router;
