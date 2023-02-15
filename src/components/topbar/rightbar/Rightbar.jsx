import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/birthday.png" alt="" />
          <span className="birthdayText">
            <b>Alex Foster</b> and <b>3 other friends</b> have their birthday
            today.
          </span>
        </div>
        <img src="assets/iphone.gif" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgCon">
              <img
                src="assets/person/nisargacv.jpg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
