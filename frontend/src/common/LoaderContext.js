import React, { createContext, useContext, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderContext = createContext();

export const useLoader = () => {
    return useContext(LoaderContext);
};

export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const showLoader = () => {
        setLoading(true);
    };

    const hideLoader = () => {
        setLoading(false);
    };

    return (
        <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
            {loading && <CircularProgress style={{ position: 'fixed', top: '50%', left: '50%' }} />}
            {children}
        </LoaderContext.Provider>
    );
};
