import Feed from "../../../components/feed/Feed";
import Rightbar from "../../../components/rightbar/Rightbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Topbar from "../../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/post/cycle.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/5.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Nisarga Nirgun</h4>
              <span className="profileInfoDesc">Mern Stack Developer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
