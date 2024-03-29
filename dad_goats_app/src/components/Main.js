import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Jokes from './Jokes'
import Inspiration from './Inspiration'
import Favorites from './Favorites'
import Home from './Home'


function Main(props) {
console.log('this is the jokes prop in Main', props.jokes)
  return (

    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Jokes' component={Jokes} />
        <Route path='/Inspiration' component={Inspiration} />
        <Route path='/About' component={About} />
        <Route path='/Favorites' component={Favorites} />
      </Switch>
    </main>
  );

}
export default Main
