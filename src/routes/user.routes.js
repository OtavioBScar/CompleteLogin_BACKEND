import express from 'express'
import { UserController } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', UserController.getAll)
router.post('/', UserController.post)
router.delete('/:id', UserController.delete)
router.patch('/:id', UserController.updateUser)

export default router
