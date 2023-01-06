import {GoogleLogin} from "react-google-login";

const clientId="1023795112660-8mjlddldunru0no0mnj6vmh55bq447tu.apps.googleusercontent.com";

function Login()
{

    const onSuccess=(res: any)=>{
        console.log("Login Success! Current user:",res.profileObj);
        alert(

            `Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`

        );

        // refreshTokenSetup(res);
    }
    
    const onFailure=(res: any)=>{
        console.log("Login Failed! res:",res);
    }



    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single-host-origin'}
            style={{marginTop:'100px'}}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login;