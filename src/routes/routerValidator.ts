import { body } from 'express-validator'
export const trainerValidator = [
    body('name').isString().exists().notEmpty(),
    body('type').isString().exists().notEmpty()
]