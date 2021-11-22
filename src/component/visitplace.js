import { Link } from "react-router-dom"
import Todo from "./todo"


const Visit = () => {
    return (
        <div className="form-background">
            <div className="result-background">
                <h2 className="visit-h2">좋았던 여행지는 어디입니까?</h2>
                <Todo/>
                <Link to="/visit_result"><input type="submit" value="추천받기"></input></Link>
            </div>
        </div>
    )
}
export default Visit