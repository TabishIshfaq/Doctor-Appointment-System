import express from "express";
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js'

const router = express.Router();

// nested route
router.use('/:doctorId/reviews', reviewRouter);

// ✅ Specific routes PEHLE
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

// ✅ Generic routes BAAD MEIN
router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);

export default router;