import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

// main components
import Filters from './Filters'
import NotFound from './NotFound'
import Articles from './routes/Articles'

export default function App() {
    return (
        <Router>
            <div>
                <ol>
                    <li>
                        <Link to="/filters">
                            Filters
                        </Link>
                    </li>
                    <li>
                        <Link to='/articles'>
                            Articles
                        </Link>
                    </li>
                </ol>
                <h1>Hello</h1>
                <Switch>
                    <Route path={'/filters'} component={Filters}/>
                    <Route path={'/articles'} component={Articles}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

