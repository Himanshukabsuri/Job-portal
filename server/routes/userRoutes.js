import express from 'express'
import { applyFoeJob, getUserData, getUserJobApplication, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'

const router = express.Router()

// get user data 
router.get('/user',getUserData)

//apply for a job
router.post('/apply',applyFoeJob)

//get applid jobs data
router.get('/applications',getUserJobApplication)

//update user profile
router.post('/update-resume',upload.single('resume'),updateUserResume)


export default router;