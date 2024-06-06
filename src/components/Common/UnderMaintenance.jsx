import React from 'react';
import maintenanceImage from '../../assets/images/maintenance.png';

const UnderMaintenance = () => {
    return (
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
            <div className="mx-auto mb-6 w-full sm:w-2/4 md:w-3/4 lg:w-2/4 xl:w-3/4">
                <img src={maintenanceImage} alt="Under Maintenance" className="mx-auto w-full h-full" />
            </div>
            <h2 className="text-center text-xl font-semibold text-gray-400 mb-2">Feature Under Development</h2>
            <p className="text-center text-gray-600">We apologize for the inconvenience. This feature is currently under development. Please check back later.</p>
        </div>
    );
};

export default UnderMaintenance;
