import Feed from "../../components/topbar/feed/Feed";
import Rightbar from "../../components/topbar/rightbar/Rightbar";
import Sidebar from "../../components/topbar/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './home.css'

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
