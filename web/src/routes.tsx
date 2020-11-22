import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './views/Landing';
import ListaOrfanatos from './views/ListaOrfanatos';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={ListaOrfanatos} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;