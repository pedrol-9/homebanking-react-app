import React from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { TEInput } from 'tw-elements-react';
import { useState } from 'react';

const PasswordInput = ({ onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className='relative bg-[#f5efe6] p-2 h-fit rounded-lg pt-2 mb-4'>
        <TEInput
          type={showPassword ? 'text' : 'password'}
          label="Password"
          className="border-2 border-gray-300 rounded-lg p-2 w-full"
          size="lg"
          onChange={onChange}
          placeholder="Password"
        />
        <div
          className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>
    );
  };

export default PasswordInput