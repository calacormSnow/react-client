import React, { useEffect, useState } from 'react';
import { CumulioDashboardComponent } from '@cumul.io/react-cumulio-dashboard';
import './App.css';

function App() {
  const appServer = 'https://app.us.cumul.io';
  const apiHost = 'https://api.us.cumul.io';
  const [dashboard, setDashboard] = useState({id:''});
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    (async function() {
      const auth = await fetch('http://localhost:4001').then(response => response.json());
      setKey(auth.key);
      setToken(auth.token);
    })();
    (async function() {
      const data = await fetch('http://localhost:4001/dashb').then(response => response.json());
      setDashboard(data);
    }

    )();
  }, []); 
  return (
    <div className="App">
      <CumulioDashboardComponent appServer={appServer} apiHost={apiHost} dashboardId={dashboard.id} authKey={key} authToken={token}></CumulioDashboardComponent>
    </div>
  );
}

export default App;
