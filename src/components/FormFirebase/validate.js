// validate.js

import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
});

export const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
});

export const resetPasswordSchema = yup.object().shape({
    email: yup.string().email().required(),
});
