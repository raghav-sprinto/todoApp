import auth0 from 'auth0-js'
import history from "../history";

export default class Auth{
    auth0=new auth0.WebAuth({
        domain: 'dev-l3oc9-3p.us.auth0.com',
        clientID : 'JfKTStfKW5mob7KysUcFbWCHzZxpHlR1',
        redirectUri: "http://localhost:3000/callback",
        responseType: 'id_token',
        scope: 'openid profile'
    })
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.getProfile = this.getProfile.bind(this);
    }
    getProfile(){
        return this.auth0.profile;
    }
    getToken(){
        return this.auth0.idToken;
    }
    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (err) {
                history.replace('/home');
                console.log({authError: err});
            }
            else if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/home');
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('sub', authResult.idTokenPayload.sub);
        // navigate to the home route
        history.replace('/home');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('sub');
        // redirect to the home page
        history.replace('/manage');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}