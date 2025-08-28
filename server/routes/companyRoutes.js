import express from 'express'
import {changeJobApplicationStatus,registerCompany,changeVisibility,loginCompany,getCompanyData,postJob,getCompanyPostedJob,getCompanyJobApplicant} from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//Register a company
router.post('/register',upload.single('image'),registerCompany)

//company login
router.post('/login',loginCompany)

//get company data
router.get('/company', protectCompany, getCompanyData)

//post a job
router.post('/post-job',protectCompany,postJob)

//get applicant data of company
router.get('/applicants',protectCompany,getCompanyJobApplicant)

//get company job list
router.get('/list-jobs',protectCompany,getCompanyPostedJob)

//change application satatus

router.post('/change-status',protectCompany,changeJobApplicationStatus)

//change application visiboilty
router .post('/change-visibilty',protectCompany,changeVisibility)

export default router;