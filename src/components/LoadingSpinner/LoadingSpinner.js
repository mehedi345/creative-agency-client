import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className="m-auto">
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                
            />    
        </div>
    );
};

export default LoadingSpinner;