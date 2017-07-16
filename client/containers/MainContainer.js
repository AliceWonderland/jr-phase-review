import React from 'react';
import store from '../store';
import {fetchAllTacos} from '../reducer';
import TacoList from '../components/TacoList';
import TacoForm from './NewTacoFormContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
    store.dispatch(fetchAllTacos());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>Welcome to virtual taco truck</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <TacoList tacos={this.state.tacos} /> } />
            <Route path='/newTaco' component= {TacoForm } />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
