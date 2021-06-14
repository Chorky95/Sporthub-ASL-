import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './components/Home';
import Video from './components/Video';
import './main.css';

function App() {
  const url =
    'https://private-anon-48fb702670-technicaltaskapi.apiary-mock.com/feed?page=1&sport=football';
  const [data, setData] = useState([]);

  const request = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    request(url);
  }, []);

  return (
    <Router>
      <div className='App'>
        <h1 className='heading'>Sporthub</h1>
        <Switch>
          <Route exact path='/'>
            <Home data={data} />
          </Route>
          <Route path='/video'>
            <Video />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
