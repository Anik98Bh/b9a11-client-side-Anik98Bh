import axios from "axios";
import { useEffect } from "react";
import useAuth from "../useAuth/useAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://b9a11-server-side-anik98-bh.vercel.app',
    withCredentials: true
})


const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                //console.log('logout the user')
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => {
                        console?.error(error)
                    })
            }
        })
    }, [logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;