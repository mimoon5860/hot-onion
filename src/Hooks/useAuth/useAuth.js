import { useContext } from "react"
import { AuthContext } from "../../Pages/AuthProvidor/AuthProvidor";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;