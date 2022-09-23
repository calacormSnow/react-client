import React, { useEffect, useState } from 'react';
import { CumulioDashboardComponent } from '@cumul.io/react-cumulio-dashboard';
import './App.css';

function App() {
  const dashboardId = 'undefined';
  const appServer = 'https://app.us.cumul.io';
  const apiHost = 'https://api.us.cumul.io';
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    (async function() {
      const auth = await fetch('http://localhost:4001').then(response => response.json());
      setKey(auth.key);
      setToken(auth.token);
    })();
  }, []); 
  return (
    <div className="App">
      <CumulioDashboardComponent appServer={appServer} apiHost={apiHost} dashboardId={dashboardId} authKey={key} authToken={token}></CumulioDashboardComponent>
    </div>
  );
}

export default App;
