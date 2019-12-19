import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import {getUsers} from './userService';

const tokenKey = "token";

async function login(email, password){
    const users = await getUsers();
    const user = users.find((user) => user.email === email);
    if(!user) return "400 bad request";

    const isValidPassword = user.password === password;
    if (!isValidPassword) return "400 bad request";

    const token = generateAuthToken(user);
    if (!token) return "400 bad request";

    localStorage.setItem(tokenKey, token);
    return "200 success";
}


function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

function logout() {
    localStorage.removeItem(tokenKey);
}


function generateAuthToken(user) {
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, "jwtPrivateKey");
    return token;
}

function getCurrentUser() {
    try {
        const jwt =JSON.stringify(localStorage.getItem(tokenKey));
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

function getJwt() {
    return localStorage.getItem(tokenKey);
}

export{
    login,
    loginWithJwt,
    logout,
    generateAuthToken,
    getCurrentUser,
    getJwt
}