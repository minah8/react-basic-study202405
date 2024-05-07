import React from 'react';

// 로그인 상태 변수를 관리할 컨텍스트
const AuthContext = React.createContext({
  isLoggedIn: false,
});

// 로그인 상태 변수를 관리할 컨텍스트
export default AuthContext;
