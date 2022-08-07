import instance from "../../api/instance"

export const signUp = (user) => {
    const api = `/signup`
    return instance.post(api,user)
}

export const signIn = (user) => {
    const api = `/signin`
    return instance.post(api,user)
}   