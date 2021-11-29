import { Link } from "react-router-dom";

const Survey = () => {
  return (
          <div className="form-background">
            <div className="request-background">
              <div className="boxtable">
                <label>
                전반적만족도
                <input type="checkbox" />
                </label>
                <label>
                자연경관
                <input type="checkbox" />
                </label>
                <label>
                문화유산
                <input type="checkbox" />
                </label>
                <br/>
                <label>
                교통
                <input type="checkbox" />
                </label>
                <label>
                숙박시설
                <input type="checkbox" />
                </label>
                <label>
                음식
                <input type="checkbox" />
                </label>
                <br/>
                <label>
                쇼핑
                <input type="checkbox" />
                </label>
                <label>
                안내시설
                <input type="checkbox" />
                </label>
                <label>
                편의시설
                <input type="checkbox" />
                </label>
                <br/>
                <label>
                친절도
                <input type="checkbox" />
                </label>
                <label>
                체험프로그램
                <input type="checkbox" />
                </label>
                <label>
                물가
                <input type="checkbox" />
                </label>
                <br/>
                <label>
                혼잡도
                <input type="checkbox" />
                </label>
                <label>
                재방문의도
                <input type="checkbox" />
                </label>
                <label>

                </label>
              </div>
              <br/>
              <Link to="/survey_result"><input type="submit" value="추천받기" className="survey_submit"/></Link>  
            </div>
          </div>
  );
};

export default Survey;

// eslint-disable-next-line no-lone-blocks
{/* <BrowserRouter>
<Router> 
  <Link to="/survey/checkbox_result"><input type="submit" value="추천받기"/></Link>
  <Switch>
    <Route path="/survey/checkbox_result" component={CheckboxResult} exact>
    </Route>
  </Switch>
</Router>
</BrowserRouter> */}



