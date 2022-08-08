import { Navigate } from "react-router-dom";

export const isAuth = () =>{
    if(!localStorage.getItem('user'))
        return [];
    return JSON.parse(localStorage.getItem('user'));
}

export const IsAdmin = ({children}) => {
    const user = isAuth()
    if(user.id === 1){
        return children
    }else{
        return <Navigate to='/dang-nhap'/>   
    }
}