import React from "react";
import './signinstyle.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from "../../services/userService";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
    const[signinObj, setSigninObj] = React.useState({email: "", password: ""})
    const[rejexObj, setRejexObj] = React.useState({emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: ""})

    const takeUserName = (event) => {
        // setsigninObj({
        //     email: event.target.value
        // })
        setSigninObj( prevState => ({ ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSigninObj( prevState => ({ ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    const submit = () => {
        let emailTest = emailRegex.test(signinObj.email)
        let passwordTest = passwordRegex.test(signinObj.password)
        if(emailTest === false){
            setRejexObj( prevState => ({ ...prevState,
                emailBorder: true,
                emailHelper: "Enter an email or phone number"
            }))
        }
        else if(emailTest === true){
            setRejexObj( prevState => ({ ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if(passwordTest === false){
            setRejexObj( prevState => ({ ...prevState,
                passwordBorder: true,
                passwordHelper: "Incorrect password"
            }))
        }
        else if(passwordTest === true){
            setRejexObj( prevState => ({ ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(signinObj)
        if(emailTest === true && passwordTest === true) {
            login(signinObj).then((response) => {
                console.log(response); 
                localStorage.setItem("token",response.data.id)
            }).catch((error) => {console.log(error)})
            console.log("login successful");
        }
    }
    return (
        <div className="mainSI">
            <div className="mainContentSI">
                <div className="spaceSI"></div>
                <div className="containerSI">
                <div className="contentSI">
                        <div className="headerSI">
                            <div className="logoSI">
                                <img src="../../../images/googleLogo.jpg" ></img>
                            </div>
                            <div className="headSI"><span>Sign in</span></div>
                            <div className="lineSI"><span>Use your Google Account</span></div>
                        </div>
                        <div className="sessionSI">
                            <div className="inputSI">
                                <div className="userNameSI"><TextField id="outlined-basic" label="Email or Phone" variant="outlined" size="small" fullWidth="true" 
                                onChange={takeUserName} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper}/></div>
                                <div className="forgotSI"><span>Forgot email?</span></div>
                                <div className="pwdSI"><TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth="true" 
                                onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper}/></div>
                                <div className="forgotSI"><span>Forgot password?</span></div>
                            </div>
                            <div className="textSI">
                                <div className="textlineSI"><span>Not your computer? Use Guest mode to sign in privately.</span></div>
                                <div className="forgotSI"><span>Learn more</span></div>
                            </div>
                        </div>
                        <div className="buttonSI">
                            <div className="btnClassSI">
                                <div><Button id="whitebtnSI" variant="text">Create account</Button></div>
                                <div><Button id="nextbtnSI" variant="contained" onClick={submit}>Next</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerSI"></div>
            </div>
        </div>
    )
}
export default Signin;
