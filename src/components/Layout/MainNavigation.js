import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { ItemProviderContext } from '../../ContextStore/ItemProvider';
import { useContext } from 'react';

const MainNavigation = () => {

    const tokenCtx = useContext(ItemProviderContext);
    const isLoggegIn = tokenCtx.isLoggegIn;




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
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>}
                    {isLoggegIn &&
                        <li>
                            <button onClick={tokenCtx.logout}>Logout</button>
                        </li>}
                </ul>
            </nav>
        </header >
    );
};

export default MainNavigation;
