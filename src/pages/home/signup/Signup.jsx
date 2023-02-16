import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signupWrapper">
        <div className="signupLeft">
          <div className="signupLeftContent">
            <h3 className="signupLogo">Facebook</h3>
            <span className="signupDesc">
              Connect with friends and the world around you on Facebook.
            </span>
          </div>
        </div>
        <div className="signupRight">
          <div className="signupBox">
            <input type="text" className="signupInput" placeholder="Username" />

            <input type="email" className="signupInput" placeholder="Email" />
            <input
              type="password"
              className="signupInput"
              placeholder="Password"
            />
            <input
              type="password"
              className="signupInput"
              placeholder="Confirm Password"
            />
            <button className="signupButton">Sign Up</button>
            <button className="signupLoginButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
