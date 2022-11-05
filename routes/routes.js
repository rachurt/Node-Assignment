const express = require('express')
const router = express.Router()

const controller = require('../controller/Profile')

router.post('/signup', controller.signup)
router.post('/login', controller.login)

router.post('/agentprofile', controller.agent_profile)
router.get('/agentprofile', controller.get_agent_profile)

router.post('/studentprofile', controller.student_profile)
router.get('/getstudentprofile', controller.get_student_profile)




module.exports = router