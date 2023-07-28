import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { ItemProviderContext } from '../../../ContextStore/ItemProvider';

const PrivateRoutes = () => {

    const tokenCtx = useContext(ItemProviderContext);
    const isLoading = tokenCtx.isLoggegIn;

    return isLoading ? <Outlet /> : <Navigate to={'/auth'} />;


}

export default PrivateRoutes;