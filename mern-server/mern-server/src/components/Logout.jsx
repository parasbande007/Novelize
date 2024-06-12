import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { user, logOut } = useContext(AuthContext); // Destructure user from AuthContext
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        if (user) { // Check if user is defined
            logOut()
                .then(() => {
                    alert("Logout Successful!");
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // Handle error if needed
                });
        } else {
            // Handle case where user is undefined
            alert("User not authenticated!"); // Example error handling
            navigate('/login', { replace: true }); // Redirect to login page
        }
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
