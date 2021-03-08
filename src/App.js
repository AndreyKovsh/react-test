import React from 'react';
import Container from './components/Container/Container';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './views/HomeView';
import TodosView from './views/TodosView';



const App = () => (
  <Container>
    <Header />  
      
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/todos" component={TodosView} />
    </Switch>
    
  </Container>  
);

export default App; 