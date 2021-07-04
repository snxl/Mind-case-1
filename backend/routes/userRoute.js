import express from 'express';
import userController from "../controller/userController.js"
import middlewareValidator from "../middlewares/validateDatas.js"
import middlewareAuthenticator from "../middlewares/validateAuthorization.js"


const router = express.Router();

router.get('/', userController.indexUser);

router.post('/signup', middlewareValidator.singUp , userController.store);
router.post("/singin", middlewareValidator.singIn, userController.indexUser)

router.put('/update', middlewareAuthenticator, middlewareValidator.update , userController.update);

router.delete('/delete', middlewareAuthenticator, userController.destroy);


export default router
