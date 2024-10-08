import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  let registerFormData = "ujujhuid";
  // const [registerFormData, setRegisterFormData] = useState({
  //   name: 'LAKSHMI',
  //   email: 'LAK@GMAIL.COM',
  //   password: '1234'
  // });
  
  
  function registerOnSubmit() {
    // Your submit logic

  }

  return (
    <AuthContext.Provider value={{ registerFormData }}>
      {children}
    </AuthContext.Provider>
  );
}
