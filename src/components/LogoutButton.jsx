// components/LogoutButton.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import Button from './Button';

const LogoutButton = ({css}) => {
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
        <Button onClick={handleLogout} text="Logout" css="ml-4 bg-red-900 hover:bg-red-500 xl:absolute xl:-bottom-24 xl:right-2" />
    );
};

export default LogoutButton;
