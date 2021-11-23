import { Link } from "react-router-dom"

const MainNav = () => {
    return (
        <div className="parent_nav">
            <nav className="nav">
                <ul className="menuitem">
                    <li><Link to="/board" className="navname">게시판</Link></li>
                    <li><Link to="/survey/survey_result" className="navname">취향으로 추천받기</Link></li>
                    <li><Link to="/visit" className="navname">경험으로 추천받기</Link></li>
                    <li><Link to="/gallery" className="navname">갤러리</Link></li>
                    
                    {/* <li><Link to></Link></li> */}
                </ul>
            </nav>
        </div>
    )
}
export default MainNav  