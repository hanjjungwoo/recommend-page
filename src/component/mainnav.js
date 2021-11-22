import { Link } from "react-router-dom"

const MainNav = () => {
    return (
        <div className="parent_nav">
            <nav className="nav">
                <ul className="menuitem">
                    <li><Link to="/board" className="navname">게시판</Link></li>
                    <li><Link to="/survey/survey_result" className="navname">취향에 맞게 골라줘</Link></li>
                    <li><Link to="/visit" className="navname">좋았던 곳이 어디야</Link></li>
                    
                    {/* <li><Link to></Link></li> */}
                </ul>
            </nav>
        </div>
    )
}
export default MainNav  