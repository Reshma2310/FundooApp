import React from "react";
// import './signupstyle.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { signup } from "../../services/userService";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { 'aria-label': 'Checkbox' } };

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    mainSU: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid blue',
    },
    mainContentSU: {
        width: '50%',
        height: '85%',
        border: '1px solid rgb(197, 195, 195)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    contentSU: {
        width: '48%',
        height: '85%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    googleImgSU: {
        width: '35%',
        height: '60%',
        display: 'flex',
        fleDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContentSU: {
        width: '100%',
        height: '12%',
        marginTop: '5px',
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '400',
    },
    imageSU: {
        width: '90%',
        height: '68%',
    },
    logoTextSU: {
        width: '100%',
        height: '30%',
    },
    googleImgSU: {
        width: '18%',
        height: '7%',
    },
    imgSU: {
        width: '100%',
        height: '100%',
    },
    namesSU: {
        width: '100%',
        height: '11%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        // border: '1px solid blue',
    },
    txtFidSU: {
        width: '95%',
    },
    personNameSU: {
        width: '98%',
        marginLeft: '5px',
        height: '11%',
        border: '0px solid pink',
    },
    textParaSU: {
        width: '100%',
        height: '5%',
        // border: '1px solid pink',
        fontSize: '12px',
        textAlign: 'start',
        marginLeft: '5px',
    },
    wtBtnSU: {
        width: '100%',
        height: '11%',
        textAlign: 'start',
        border: '0px solid pink',
    },
    whitebtnSU: {
        textTransform: 'capitalize',
    },
    checkShowSU: {
        width: '40%',
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '15px',
        
    },
    btnClassSU: {
        width: '100%',
        height: '18%',
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        mainSU: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
        },
        mainContentSU: {
            width: '90%',
            height: '95%',
        },
        contentSU: {
            width: '80%',
            height: '100%',
        },
        logoImgSU: {
            display: 'none',
        },
        googleImgSU: {
            width: '30%',
            height: '7%',
            border: '0px solid pink',
        },
        imageSU: {
            width: '100%',
            height: '100%',
        },
        textContentSU: {
            width: '100%',
            height: '12%',
        },
        namesSU: {
            width: '100%',
            height: '18%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            border: '0px solid pink',
        },
        txtFidSU: {  
            width: '100%',         
            height: '12px',
            fontSize: 'medium',
        },
        personNameSU: {
            width: '100%',
            height: '8%',
            border: '0px solid pink',
            marginLeft: '0px',
        },
        textParaSU: {
            width: '90%',
            height: '5%',
            border: '0px solid pink',
            fontSize: '12px',
            textAlign: 'start',
            marginLeft: '0px',
        },
        wtBtnSU: {
            width: '100%',
            height: '8%',
            textAlign: 'start',
            border: '0px solid pink',
        },
        whitebtnSU: {
            textTransform: 'capitalize',
            fontSize: '11px',
            fontWeight: 'bolder',
        },
        checkShowSU: {
            width: '65%',
            height: '8%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '15px',
            marginLeft: '-10px',
        },
        btnClassSU: {
            width: '100%',
            height: '12%',
            border: '0px solid pink',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        nextbtnSU: {
            textTransform: 'capitalize',
            fontWeight: 'bolder',
        },
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        mainSU: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
        },
        mainContentSU: {
            width: '70%',
            height: '90%',
        },
        contentSU: {
            width: '85%',
            height: '90%',
        },
        logoImgSU: {
            display: 'none',
        },
        googleImgSU: {
            width: '25%',
            height: '7%',
            border: '0px solid pink',
        },
        imageSU: {
            width: '100%',
            height: '100%',
        },
        textContentSU: {
            width: '100%',
            height: '12%',
        },
        namesSU: {
            width: '100%',
            height: '18%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            border: '0px solid pink',
        },
        txtFidSU: {  
            width: '100%',         
            height: '12px',
            fontSize: 'medium',
        },
        personNameSU: {
            width: '100%',
            height: '8%',
            border: '0px solid pink',
            marginLeft: '0px',
        },
        textParaSU: {
            width: '90%',
            height: '6%',
            border: '0px solid pink',
            fontSize: '12px',
            textAlign: 'start',
            marginLeft: '0px',
        },
        wtBtnSU: {
            width: '100%',
            height: '8%',
            textAlign: 'start',
            border: '0px solid pink',
        },
        whitebtnSU: {
            textTransform: 'capitalize',
            fontSize: '11px',
            fontWeight: 'bolder',
        },
        checkShowSU: {
            width: '55%',
            height: '8%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '15px',
            marginLeft: '-10px',
        },
        btnClassSU: {
            width: '100%',
            height: '12%',
            border: '0px solid pink',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        nextbtnSU: {
            textTransform: 'capitalize',
            fontWeight: 'bolder',
        },
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1200px)']: {
        mainSU: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
        },
        mainContentSU: {
            width: '50%',
            height: '90%',
        },
        contentSU: {
            width: '85%',
            height: '90%',
        },
        logoImgSU: {
            display: 'none',
        },
        googleImgSU: {
            width: '18%',
            height: '7%',
            border: '0px solid pink',
        },
        imgSU: {
            width: '100%',
            height: '100%',
        },
        imageSU: {
            width: '90%',
            height: '68%',
        },
        textContentSU: {
            width: '100%',
            height: '12%',
            marginTop: '5px',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '400',
        },
        namesSU: {
            width: '100%',
            height: '11%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '0px solid pink',
        },
        txtFidSU: {  
            width: '20vw',         
            height: '12px',
            fontSize: 'medium',
        },
        pwdSU: {
            width: '100%',
            height: '11%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '0px solid pink',
        },
        personNameSU: {
            width: '100%',
            height: '11%',
            border: '0px solid pink',
            marginLeft: '0px',
        },
        textParaSU: {
            width: '98%',
            height: '9%',
            border: '0px solid pink',
            fontSize: '12px',
            textAlign: 'start',
            marginLeft: '6px',
        },
        wtBtnSU: {
            width: '100%',
            height: '11%',
            textAlign: 'start',
            border: '0px solid pink',
        },
        // whitebtnSU: {
        //     textTransform: 'capitalize',
        //     fontSize: '11px',
        //     fontWeight: 'bolder',
        // },
        checkShowSU: {
            width: '45%',
            height: '8%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '15px',
            marginLeft: '-5px',
        },
        btnClassSU: {
            width: '100%',
            height: '18%',
            border: '0px solid pink',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        nextbtnSU: {
            textTransform: 'capitalize',
            fontWeight: 'bolder',
        },
    }
})

function Signup() {

    const classes = useStyle()

    const navigate = useNavigate()

    const [signupObj, setSignupObj] = React.useState({ firstName: "", lastName: "", email: "", password: "", service: "advance" })
    const [rejexObj, setRejexObj] = React.useState({
        fnameBorder: false, fnameHelper: "", lnameBorder: false, lnameHelper: "",
        usernameBorder: false, usernameHelper: "", passwordBorder: false, passwordHelper: ""
    })

    const takeUserFirstName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserLastName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserName = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takePassword = (event) => {
        setSignupObj(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let fnameTest = fnameRegex.test(signupObj.firstName)
        let lnameTest = lnameRegex.test(signupObj.lastName)
        let usernameTest = emailRegex.test(signupObj.email)
        let passwordTest = passwordRegex.test(signupObj.password)
        if (fnameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                fnameBorder: true,
                fnameHelper: "Enter valid name"
            }))
        }
        else if (fnameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                fnameBorder: false,
                fnameHelper: ""
            }))
        }
        if (lnameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                lnameBorder: true,
                lnameHelper: "Enter valid name"
            }))
        }
        else if (lnameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                lnameBorder: false,
                lnameHelper: ""
            }))
        }
        if (usernameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                usernameBorder: true,
                usernameHelper: "Enter valid email"
            }))
        }
        else if (usernameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                usernameBorder: false,
                usernameHelper: ""
            }))
        }
        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter valid password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }
        console.log(signupObj)
        if (fnameTest === true && lnameTest === true && usernameTest === true && passwordTest === true) {
            signup(signupObj).then((response) => {
                console.log(response);
                // localStorage.setItem("token",response)
            }).catch((error) => { console.log(error) })
            console.log("Signup successful");
        }
    }

    const savedAccount = () => {
        navigate('/')
    }

    return (
        <Box className={classes.mainSU}>
            <Paper className={classes.mainContentSU}>
                <Box className={classes.contentSU}>
                    <Box className={classes.googleImgSU}><img className={classes.imgSU} src="../../../images/googleLogo.jpg" /></Box>
                    <Box className={classes.textContentSU}><span>Create your Google Account</span></Box>
                    <Box className={classes.namesSU}>
                        <Box><TextField id="outlined-basic" className={classes.txtFidSU} label="First name" variant="outlined" size="small" onChange={takeUserFirstName}
                            error={rejexObj.fnameBorder} helperText={rejexObj.fnameHelper} /></Box>
                        <Box><TextField id="outlined-basic" className={classes.txtFidSU} label="Last name" variant="outlined" size="small" onChange={takeUserLastName}
                            error={rejexObj.lnameBorder} helperText={rejexObj.lnameHelper} /></Box>
                    </Box>
                    <Box className={classes.personNameSU}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" size="small" fullWidth="true" onChange={takeUserName}
                            error={rejexObj.usernameBorder} helperText={rejexObj.usernameHelper} />
                    </Box>
                    <Box className={classes.wtBtnSU}><Button style={{textTransform: 'capitalize'}} variant="text">Use my current email address instead</Button></Box>
                    <Box className={classes.namesSU}>
                        <Box><TextField id="outlined-basic" className={classes.txtFidSU} label="Password" variant="outlined" size="small" onChange={takePassword}
                            error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} /></Box>
                        <Box><TextField id="outlined-basic" className={classes.txtFidSU} label="Confirm" variant="outlined" size="small" /></Box>
                    </Box>
                    <Box className={classes.textParaSU}><span>Use 8 or more characters with a mix of letters, numbers & symbols</span></Box>
                    <Box className={classes.checkShowSU}>
                        <Box><Checkbox {...label} /></Box>
                        <Box>Show password</Box>
                    </Box>
                    <Box className={classes.btnClassSU}>
                        <Box><Button className={classes.whitebtnSU} style={{textTransform: 'capitalize'}} variant="text" onClick={savedAccount}>Sign in instead</Button></Box>
                        <Box><Button id="nextbtnSU" style={{textTransform: 'capitalize'}} variant="contained" size="medium" onClick={submit}>Next</Button></Box>
                    </Box>
                </Box>
                <Box className={classes.logoImgSU}>
                    <Box className={classes.imageSU}>
                        <Box className={classes.imgLogoSU}><img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"></img></Box>
                    </Box>
                    <Box className={classes.logoTextSU}><span>One account. All of Google<br></br> working for you.</span></Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Signup;
