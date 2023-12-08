


import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast'
import { useAuth } from '../../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import './FromFirebase.css';

const FromFirebase = ({ onCloseForm, onAuthentication }) => {
    const auth = useAuth();

    const { user } = auth;


    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [resetEmailSent, setResetEmailSent] = useState(false);

    const [showResetForm, setShowResetForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);




    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await auth.resetPassword(email);
            setResetEmailSent(true);
            toast.success(`Se ha enviado la solicitud a: ${email}`)
            setError(null);
            setEmailLogin('');
            setPasswordLogin('');
            setShowResetForm(false);
            setShowLoginForm(true);
            onCloseForm();
        } catch (error) {
            setResetEmailSent(false);
        }
    };

    const handlerLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.login(emailLogin, passwordLogin);
            toast.success(`Bienvenido ${emailLogin}`);
            onCloseForm();
        } catch (error) {
            console.log('error.message', error.message)
        };
    }

    const handlerGoogle = async (e) => {
        e.preventDefault();
        try {
            await auth.loginWithGoogle();
            toast.success('¡Se ha logueado con éxito!');
            onCloseForm();
        } catch (error) {
            console.error('Error al iniciar sesión con Google', error);
        }
    };

    const handlerLogout = () => {
        auth.logout();
        toast.success('Se ha deslogueado con exito!!')
        onCloseForm();
    };

    const handlerRegister = (e) => {
        e.preventDefault();
        try {
            auth.register(emailRegister, passwordRegister);
            toast.success(`Se ha registrado, ${emailRegister}`)
            onCloseForm();

        } catch (error) {
            console.log('seterrorRegister', error.message)
            throw error
        }
    };

    const showResetPasswordForm = () => {
        setShowResetForm(true);
    };


    return (
        <div className="main">

            <input type="checkbox" id="chk" aria-hidden="true" />

            {showResetForm ? (
                <div className="forgot">
                    <form className="form">
                        <label htmlFor="chk" aria-hidden="true">
                            Olvidó su Contraseña?
                        </label>
                        <p className='text__forgot'>Ingrese su correo electrónico para restablecer la contraseña:</p>
                        <input
                            className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className='button__reset' type="submit" onClick={handleResetPassword}>
                            Restablecer Contraseña
                        </button>

                    </form>
                </div>
            ) : (

                <div className="login">
                    <form className="form">
                        <label htmlFor="chk" aria-hidden="true">
                            Log in
                        </label>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                            onChange={(e) => setEmailLogin(e.target.value)}
                        />
                        <input
                            className="input"
                            type="password"
                            name="pswd"
                            placeholder="Password"
                            required=""
                            onChange={(e) => setPasswordLogin(e.target.value)}
                        />
                        <div className='container__buttons'>
                            <button className="button__form" onClick={handlerLogin}>
                                Log in
                            </button>
                            <button className="button__form" onClick={handlerGoogle}>
                                <FcGoogle className="google__icon" />
                            </button>
                        </div>
                        <button className='button__reset' onClick={showResetPasswordForm}>Olvidó su contraseña?</button>

                        <button className="button__form" onClick={handlerLogout}>
                            Cerrar Sesion
                        </button>
                    </form>
                </div>

            )}
            <div className="register">
                <form className="form">
                    <label htmlFor="chk" aria-hidden="true">
                        Register
                    </label>
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                        onChange={(e) => setEmailRegister(e.target.value)}
                    />
                    <input
                        className="input"
                        type="password"
                        name="pswd"
                        placeholder="Password"
                        required=""
                        onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                    <button className="button__form" onClick={handlerRegister}>
                        Registro
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FromFirebase;
