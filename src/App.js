import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import my component
import {Button, Card, BaseHeader } from './components';

// import my pages
import {Home, Detail} from './pages';

const Container = (props) => (
  <div className="container App">{props.children}</div>
);


const route = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: 'detail',
    path: '/detail',
    exact: true,
    component: Detail
  }
]

// metode dynamic routing
// {route.map((val, index) => (
//   <Route key={index} component={val.component} path={val.path} exact={val.exact} />
// ))}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail/:id" component={Detail} exact />
      </Switch>
    </BrowserRouter>
  );
}





export default App;
