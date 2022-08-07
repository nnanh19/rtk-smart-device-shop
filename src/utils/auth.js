import { Navigate } from "react-router-dom";

export const isAuth = () =>{
    if(!localStorage.getItem('user'))
        return [];
    return JSON.parse(localStorage.getItem('user'));
}

export const IsAdmin = ({children}) => {
    const user = isAuth()
    console.log(user.id);
    if(user.id === 1){
        return children
    }else{
        return <Navigate to={-1}/>
    }
}