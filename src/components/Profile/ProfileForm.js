import React, { useContext, useState } from 'react';
import { ItemProviderContext } from '../../ContextStore/ItemProvider';
import classes from './ProfileForm.module.css';
import { useNavigate } from 'react-router-dom';


const ProfileForm = () => {

    const [inputPassword, setInputPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const AuthContext = useContext(ItemProviderContext);
    const navigate = useNavigate();



    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const newInputPassword = inputPassword;
        setIsLoading(true)
        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB3uFH6b2LVR7iMNp8Dh1ZTlvy_elJpVIs', {
                method: 'POST',
                body: JSON.stringify({
                    idToken: AuthContext.token,
                    password: newInputPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            setIsLoading(false)
            if (response.ok) {
                const data = await response.json();
                navigate('/')
            } else {
                const data = await response.json();
                let errroMessage = "Authentication fail!"
                if (data && data.error && data.error.message) {
                    errroMessage = data.error.message;
                }
                throw new Error(errroMessage)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }





    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    type='password'
                    minLength={7}
                    id='new-password' />
            </div>
            <div className={classes.action}>
                {!isLoading && <button>Change Password</button>}
                {isLoading && <p>Sending request....</p>}

            </div>
        </form>
    );
}

export default ProfileForm;
