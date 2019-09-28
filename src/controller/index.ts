import express from 'express';
import * as person from './person';

const router = express.Router();
router.get('/person/:id', person.getById);
router.get('/person', person.getAll);
router.post('/person', person.add);
router.put('/person', person.update);
router.delete('/person/:id', person.remove);

export default router;
