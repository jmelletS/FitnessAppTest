import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../Pages/Exercises'
import ExercisesNew from '../Pages/ExercisesNew'
import NotFound from '../Pages/Notfound'

//Con Constante
const App = () =>(
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExercisesNew}/>
                <Route component={NotFound}/>
            </Switch>

        </BrowserRouter>
)
//Con Function
/*function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExercisesNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )

}*/

export default App