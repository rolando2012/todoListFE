import { replace } from "react-router";

export async function requireAuth({request}, next){
    const token = localStorage.getItem("token");
    if(!token){
        localStorage.removeItem("token");
        throw replace("/");
    }
    return await next();
}

export async function requireGuest({request}, next) {
    const token = localStorage.getItem("token");
    if(token){
        throw replace("/tasks"); 
    }
    return await next();
}