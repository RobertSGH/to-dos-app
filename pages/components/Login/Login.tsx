// Login.tsx
import FirstSVG from '@/pages/SVG/FirstSVG';
import React from 'react';

interface LoginProps {
  onLogin?: (password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleLogin = () => {
    // You can call the onLogin prop here with the password value.
  };

  return (
    <div className='centered-wrapper'>
      <div className='login-container'>
        <div className='login-header'>
          SET UP A PASSWORD AND LOG IN TO BEGIN
        </div>
        <div>
          <FirstSVG />
        </div>
        <div>
          <input className='login-input' placeholder='4 DIGITS' />
          <button className='login-button' onClick={handleLogin}>
            Go
          </button>
        </div>
        <a href='#' className='login-terms'>
          TERMS OF SERVICE
        </a>
      </div>
    </div>
  );
};

export default Login;
