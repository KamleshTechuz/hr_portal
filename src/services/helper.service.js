import AsyncStorage from '@react-native-async-storage/async-storage';


// import * as CryptoJS from 'crypto-js';

// export const encrypt = (id: string | number | object, encryptKey = '') => {
// 	const deviceId = (encryptKey) ? encryptKey : 'Techuz@123';
// 	return CryptoJS.AES.encrypt(`${id}`, `${deviceId}`).toString();
// };

// export const decrypt = (id: string, encryptKey = '') => {
// 	const deviceId = (encryptKey) ? encryptKey : 'Techuz@123';
// 	const decryptedId = CryptoJS.AES.decrypt(id, `${deviceId}`);
// 	return decryptedId.toString(CryptoJS.enc.Utf8);
// };

export const setToken = async (key, value) => {
	try {
		const strValue = JSON.stringify(value);
	  await AsyncStorage.setItem(key, strValue)
	} catch (error) {
		console.log('AsyncStorage: setToken error : ', error);
	}
  };

export const getToken = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key)
		return value ? JSON.parse(value) : null;
	} catch(error) {
		console.log('AsyncStorage: getToken error : ', error);
	}
};

export const clearStorage = async () => {
	try {
	  await AsyncStorage.clear()
	  console.log('clear done');
	} catch(e) {
		console.log('AsyncStorage: clearStorage error : ', error);
	}
}

// export const getLocalUser = () => {
// 	const encUser = getToken('loggedInUser');
// 	const user = JSON.parse(decrypt(encUser ? encUser : ''));
// 	return user;
// };

export const nameLetters = (name) => {
	if(name.includes(' ')) return name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0);
	return name.substring(0, 2).toUpperCase();
};

export const firstLetterCapital = (word) => word.charAt(0).toUpperCase() + word.slice(1);