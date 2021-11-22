import React from "react";
import Home from './component/home'
import Survey from "./component/survey";
import Header from "./component/header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Board from "./component/board";
import SurveyResult from "./component/survey_result";
import Visit from "./component/visitplace";
import VisitResult from "./component/visit_result";


export default class Routes extends React.Component {
  render() {
    return (
      
      <Router>
        <Header/>
        <Route path="/survey" component={Survey}/>
        <Route path="/board" component={Board}/>
        <Route path="/survey_result" component={SurveyResult}/>
        <Route path="/visit" component={Visit}/>
        <Route path="/visit_result" component={VisitResult}/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}