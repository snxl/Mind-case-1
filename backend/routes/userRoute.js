import express from 'express';
import userController from "../controller/userController.js"
import middlewareValidator from "../middlewares/validateDatas.js"
import middlewareAuthenticator from "../middlewares/validateAuthorization.js"
import middlewareAuthorizationAdministrator from '../middlewares/middlewareAuthorizationAdministrator.js';

import jwt from "jsonwebtoken"


const router = express.Router();

router.get('/', (req, res)=> res.json("foi"));

router.get('/admin/allusers', middlewareAuthorizationAdministrator, userController.allUserAdm);

router.post('/signup', middlewareValidator.singUp , userController.store);
router.post("/signin", middlewareValidator.singIn, userController.indexUser)

router.put('/update', middlewareAuthenticator, middlewareValidator.update , userController.update);
router.put('/admin/update', middlewareAuthorizationAdministrator, middlewareValidator.updateAdmin , userController.updateAdm);

router.delete('/delete', middlewareAuthenticator, userController.destroy);
router.delete('/admin/delete', middlewareAuthorizationAdministrator, middlewareValidator.delete, userController.deleteAdm);


export default router
