import React from 'react';

const LoadSpinner = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadSpinner;