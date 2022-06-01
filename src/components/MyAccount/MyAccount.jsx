import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyAccountHeader from './MyAccountHeader';
import UserProfile from './UserProfile';
import './MyAccount.scss';

function MyAccount() {
  const { email, username } = useSelector((state) => state.auth.profile);
  if (!email) {
    alert('로그인이 필요합니다.');
    return <Navigate to="/" />;
  }
  return (
    <div className="MyAccount">
      <div className="MyAccount-Topper">
        <MyAccountHeader />
      </div>
      <div className="MyAccount-Body">
        <UserProfile email={email} username={username} />
      </div>
    </div>
  );
}

export default MyAccount;
