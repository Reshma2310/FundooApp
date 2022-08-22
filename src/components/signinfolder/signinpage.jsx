import React from "react";
// import './signinstyle.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { createBox } from "@mui/system";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    mainSI: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    mainContentSI: {
        width: '35vw',
        height: '97vh',
        display: 'flex',
        flexDirection: 'column',
    },
    spaceSI: {
        width: '100%',
        height: '10%',
    },
    containerSI: {
        width: '97%',
        height: '80%',
        border: '1px solid rgb(197, 195, 195)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    contentSI: {
        width: '100%',
        height: '95%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // border: '1px solid blue',
    },
    footerSI: {
        width: '100%',
        height: '10%',
    },
    headerSI: {
        width: '45%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid blue',
        // textAlign: 'center',
    },
    sessionSI: {
        width: '80%',
        height: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    buttonSI: {
        width: '82%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoSI: {
        width: '33%',
        height: '30%',
        // border: '1px solid blue',
    },
    logoImgSI: {
        width: '100%',
        height: '100%',
    },

    headSI: {
        width: '32%',
        height: '30%',
        
    },
    headSpanSI: {
        fontSize: '22px',
        fontWeight: '400',
    },
    lineSI: {
        width: '100%',
        height: '30%',
    },
    lineSpanSI: {
        fontSize: 'medium',
        fontWeight: '400',
    },
    inputSI: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    textSI: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    userNameSI: {
        width: '100%',
        height: '25%',
    },
    pwdSI: {
        width: '100%',
        height: '25%',
    },
    forgotSI: {
        color: 'blueviolet',
        fontWeight: '500',
    },
    textlineSI: {
        fontSize: '14px',
    },
    btnClassSI: {
        width: '100%',
        height: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    whitebtnSI: {
        fontSize: 'small',
        // textTransform: 'capitalize',
        fontWeight: 'bolder',
    },
    nextbtnSI: {
        fontSize: 'small',
        // textTransform: 'capitalize',
        fontWeight: 'bolder',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainContentSI: {
            width: '75vw',
            height: '97vh',
        },
        headerSI: {
            width: '85%',
        },
        sessionSI: {
            width: '80%',
            height: '45%',
        },
        buttonSI: {
            width: '82%',
            height: '20%',
        },
        headSI: {
            width: '50%',
            height: '30%',
        },
        headSpanSI: {
            fontSize: '22px',
            fontWeight: '400',
        },
        lineSI: {
            width: '100%',
            height: '30%',
        },
        inputSI: {
            height: '60%',
        },
        textSI: {
            height: '30%',
        },
        whitebtnSI: {
            variant: 'text',
            fontSize: '10px',
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        mainContentSI: {
            width: '75vw',
            height: '97vh',
        },
        headerSI: {
            width: '75%',
        },
        sessionSI: {
            width: '80%',
            height: '45%',
        },
        buttonSI: {
            width: '82%',
            height: '20%',
        },
        headSI: {
            width: '50%',
            height: '30%',
        },
        headSpanSI: {
            fontSize: '22px',
            fontWeight: '400',
        },
        lineSI: {
            width: '100%',
            height: '30%',
        },
        inputSI: {
            height: '60%',
        },
        textSI: {
            height: '25%',
        },
        whitebtnSI: {
            fontSize: '5px',
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1200px)']: {
        mainContentSI: {
            width: '55vw',
            height: '97vh',
        },
        headerSI: {
            width: '50%',
        },
        sessionSI: {
            width: '80%',
            height: '45%',
        },
        buttonSI: {
            width: '82%',
            height: '20%',
        },
        headSI: {
            width: '50%',
            height: '30%',
        },
        headSpanSI: {
            fontSize: '22px',
            fontWeight: '400',
        },
        lineSI: {
            width: '100%',
            height: '30%',
        },
        inputSI: {
            height: '60%',
        },
        textSI: {
            height: '25%',
        }
    }
})

function Signin() {
    const classes = useStyle()
    const navigate = useNavigate()
    const [signinObj, setSigninObj] = React.useState({ email: "", password: "" })
    const [rejexObj, setRejexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

    const takeUserName = (event) => {
        // setsigninObj({
        //     email: event.target.value
        // })
        setSigninObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSigninObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    const submit = () => {
        let emailTest = emailRegex.test(signinObj.email)
        let passwordTest = passwordRegex.test(signinObj.password)
        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter an email or phone number"
            }))
        }
        else if (emailTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Incorrect password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(signinObj)
        if (emailTest === true && passwordTest === true) {
            login(signinObj).then((response) => {
                console.log(response);
                localStorage.setItem("token", response.data.id)
                navigate('/dashboard')
            }).catch((error) => { console.log(error) })
            console.log("login successful");
        }
    }

    const newAccount = () => {
        navigate('/signup')
    }

    return (
        <Box className={classes.mainSI}>
            <Box className={classes.mainContentSI}>
                <Box className={classes.spaceSI}></Box>
                <Paper className={classes.containerSI}>
                    <Box className={classes.contentSI}>
                        <Box className={classes.headerSI}>
                            <Box className={classes.logoSI}>
                                <img className={classes.logoImgSI} src="../../../images/googleLogo.jpg" ></img>
                            </Box>
                            <Box className={classes.headSI}><span className={classes.headSpanSI}>Sign in</span></Box>
                            <Box className={classes.lineSI}><span className={classes.lineSpanSI}>Use your Google Account</span></Box>
                        </Box>
                        <Box className={classes.sessionSI}>
                            <Box className={classes.inputSI}>
                                <Box className={classes.userNameSI}><TextField id="outlined-basic" label="Email or Phone" variant="outlined" size="small" fullWidth="true"
                                    onChange={takeUserName} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} /></Box>
                                <Box className={classes.forgotSI}><span>Forgot email?</span></Box>
                                <Box className={classes.pwdSI}><TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth="true"
                                    onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} /></Box>
                                <Box className={classes.forgotSI}><span>Forgot password?</span></Box>
                            </Box>
                            <Box className={classes.textSI}>
                                <Box className={classes.textlineSI}><span>Not your computer? Use Guest mode to sign in privately.</span></Box>
                                <Box className={classes.forgotSI}><span>Learn more</span></Box>
                            </Box>
                        </Box>
                        <Box className={classes.buttonSI}>
                            <Box className={classes.btnClassSI}>
                                <Box><Button className={classes.whitebtnSI} style={{textTransform: 'capitalize'}} variant="text" onClick={newAccount}>Create account</Button></Box>
                                <Box><Button className={classes.nextbtnSI} style={{textTransform: 'capitalize'}} variant="contained" onClick={submit}>Next</Button></Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                <Box className={classes.footerSI}></Box>
            </Box>
        </Box>
    )
}
export default Signin;
