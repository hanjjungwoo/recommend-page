import { Link } from "react-router-dom"
import Scroll from "./scroll"


const Visit = () => {
    return (
        <div className="form-background">
            <div className="request-background">
                <h1>좋았던 여행지는 어디입니까?</h1>
                <Scroll/>
                <Link to="/visit_result"><button type="submit">추천받기</button></Link>
            </div>
        </div>
    )
}
export default Visit