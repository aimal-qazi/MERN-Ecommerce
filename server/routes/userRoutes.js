import express from 'express';
import { admin, protect } from '../middlewares/authMiddleware.js';
import { deleteUser, getUserProfile, getUsers, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/', protect, admin, getUsers);
router.delete('/:id', protect, admin, deleteUser);

export default router;