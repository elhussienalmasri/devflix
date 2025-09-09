import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, 'your-secret-key', { expiresIn: '15d' });
  
	res.cookie('jwt-netflix', token, {
	  maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
	  httpOnly: true,  // Prevent access to cookie via JavaScript
	  sameSite: 'None',  // Allow cross-site cookies
	  secure: true,  // Cookies will only be sent over HTTPS (important for SameSite=None)
	});
  
	return token;
  };
