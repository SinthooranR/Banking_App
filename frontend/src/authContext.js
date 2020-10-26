import { createContext } from 'react';

export const Authenticate = createContext({
    loggedIn: false,
    user_id: null,
    login: () => { },
    logout: () => { },
    card_id: null,
    grabCard: () => { },
});