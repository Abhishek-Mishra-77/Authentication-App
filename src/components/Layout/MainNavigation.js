import { Link, useNavigate } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { ItemProviderContext } from '../../ContextStore/ItemProvider';
import { useContext } from 'react';

const MainNavigation = () => {

    const navigate = useNavigate();

    const AuthContext = useContext(ItemProviderContext)
    const isLoggegIn = AuthContext.isLoggegIn;
 



    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggegIn &&
                        <li>
                            <Link to='/auth' state={{ isLoggegIn }}>Login</Link>
                        </li>}
                    {isLoggegIn &&
                        <islogin>
                            <Link to='/profile'>Profile</Link>
                        </islogin>}
                    {isLoggegIn &&
                        <li>
                            <button onClick={AuthContext.logout}>Logout</button>
                        </li>}
                </ul>
            </nav>
        </header >
    );
};

export default MainNavigation;
