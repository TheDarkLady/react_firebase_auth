import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  // let registerFormData = "ujujhuid";
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  
  function registerOnSubmit() {
    // Your submit logic
    e.preventDefault();
    // Your submit logic here
    console.log("Form submitted with data: ", registerFormData);

  }

  return (
    <AuthContext.Provider value={{ registerFormData, setRegisterFormData, registerOnSubmit }}>
      
      {children}
    </AuthContext.Provider>
  );
}
