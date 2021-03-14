// @ts-nocheck
import {AttackForm} from "@views/AttackForm"
import {Leaderboard} from "@views/Leaderboard"
import {createBrowserHistory} from "history"
import React from "react"
import ReactDOM from "react-dom"
import {Redirect, Route, Router, Switch} from "react-router"
import "./index.css"

let history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route path="/attack" component={AttackForm} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Redirect exact={true} from="/" to="/attack" />
      </Switch>
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
)
