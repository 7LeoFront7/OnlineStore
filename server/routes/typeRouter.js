const Router = require('express')
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleWare')
const router = new Router()


router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router