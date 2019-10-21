import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Cart from './Cart';
import AddItem from './AddItem';

const Main = () => {
    return (
        <Switch>
            <Route exact path = '/Cart.js' component = {Cart}></Route>
            <Route exact path = '/AddItem.js' component = {AddItem}></Route>
        </Switch>
    );
}

export default Main;