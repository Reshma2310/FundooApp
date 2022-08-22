import axios from "axios";

export const login = (loginObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", loginObj)
    console.log("Login in process")
    return response
}
export const signup = (signupObject) => {
    let result = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", signupObject)
    return result
    console.log("Signup in process")    
}