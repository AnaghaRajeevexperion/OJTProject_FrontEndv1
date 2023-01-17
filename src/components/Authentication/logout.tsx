import { GoogleLogout } from "react-google-login";

const clientId="1023795112660-8mjlddldunru0no0mnj6vmh55bq447tu.apps.googleusercontent.com";

function Logout()
{

    const onSuccess=()=>{
        console.log("Logout Success!");
    }
    
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;