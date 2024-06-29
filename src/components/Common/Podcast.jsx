import React from 'react'
import Not404Found from '../../assets/images/NotFound.png';

const NotFound = () => {
    return (
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
            <div className="mx-auto mb-6 w-3/4 sm:w-2/4 md:w-3/4 lg:w-2/4 xl:w-3/4">
                <img src={Not404Found} alt="Under Maintenance" className="mx-auto w-full h-auto" />
            </div>
        </div>
    )
}

export default NotFound;