import {createContext} from 'react';

export const Authenticate = createContext({
    loggedIn: false,
    login: () => {},
    logout: () => {}
});