import {useContext} from 'react'
import { AuthContext } from './AutoProvider';

export const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;