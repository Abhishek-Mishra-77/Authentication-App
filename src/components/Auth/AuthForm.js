import { useState } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [enteredEmail, setenteredEmail] = useState('');
    const [Enteredpassword, setEnteredpassword] = useState('');


    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        setIsLoading(true)
        if (isLogin) {
            alert('Creat')
        }
        else {
            try {
                const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3uFH6b2LVR7iMNp8Dh1ZTlvy_elJpVIs', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: Enteredpassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'applications/json'
                    }
                })

                setIsLoading(false)

                if (response.ok) {
                    console.log(response)
                } else {
                    const data = await response.json();
                    let errroMessage = "Authentication fail!"
                    if (data && data.error && data.error.message) {
                        errroMessage = data.error.message;
                    }
                    alert(errroMessage)
                }
            }
            catch (error) {

            }
        }
    }



    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        type='email'
                        id='email'
                        required
                        onChange={(e) => setenteredEmail(e.target.value)}
                        value={enteredEmail}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        value={Enteredpassword}
                        onChange={(e) => setEnteredpassword(e.target.value)}
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request....</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
