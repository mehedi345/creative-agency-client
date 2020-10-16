import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div>
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={1000}
            />    
        </div>
    );
};

export default LoadingSpinner;