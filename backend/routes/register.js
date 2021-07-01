import express from 'express';
import registerController from "../controller/register.js"


const router = express.Router();

router.get('/', registerController.indexUser);

export default router
