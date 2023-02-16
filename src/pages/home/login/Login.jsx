import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLeftContent">
            <h3 className="loginLogo">Facebook</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Facebook.
            </span>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" className="loginInput" placeholder="Email"/>
            <input type="password" className="loginInput" placeholder="Password"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
