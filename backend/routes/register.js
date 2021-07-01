import express from 'express';
import registerController from "../controller/userController.js"
import middlewareValidator from "../middlewares/validateRegister.js"


const router = express.Router();

router.get('/', registerController.indexUser);
router.post('/', middlewareValidator.register , registerController.store);


export default router
