import React, { createContext, useState } from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isOnboarding, setIsOnboarding] = useState(true);

	const contextValue = {
        isLoggedIn, setIsLoggedIn,
		isOnboarding, setIsOnboarding,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};