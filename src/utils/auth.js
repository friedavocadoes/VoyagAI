// utils/auth.js
import {jwtDecode} from 'jwt-decode';

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    return decoded.user.name;
    
  } catch (error) {
    console.error('Invalid token');
    return null;
  }
};


export const getEmailFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    return decoded.user.email;
    
  } catch (error) {
    console.error('Invalid token');
    return null;
  }
};