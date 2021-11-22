import MainNav from "./mainnav";
import leaf1 from "../images/leaf1.png";
import leaf2 from "../images/leaf2.png";

const Header = () => {
    return (
        <div className="parent-header">
            <div className="header">
                <div>
                    <div className="header-content">
                        <h1><a href="/" rel="home"><img src={leaf1} alt="leaf1"/>너와 <span>나</span>드리<img src={leaf2} alt="leaf2"/></a></h1>
                    </div>
                </div>
            </div>
            <div className="parent-nav">
                <MainNav/>
            </div>
        </div>
    )
}
export default Header