// components/LogoutButton.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import Button from './Button';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const token = useSelector((state) => state.authReducer.token);

    const handleLogout = () => {
        console.log('Logging out...');
        dispatch(logout());
        // navigate('/');
        window.location.href = '/';
    };

    return (
        <Button onClick={handleLogout} text="Logout" css="bg-red-900 hover:bg-red-500" />
    );
};

export default LogoutButton;
