import React, { useEffect, useState, useRef } from 'react';
import { CumulioDashboardComponent, CumulioDashboard } from '@cumul.io/react-cumulio-dashboard';
import './App.css';

function App() {
  const dashboardInstance = useRef<CumulioDashboard>(null);
  const appServer = 'https://app.us.cumul.io';
  const apiHost = 'https://api.us.cumul.io';
  const [dashboard, setDashboard] = useState({ id: '' });
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    (async function () {
      const auth = await fetch('http://localhost:4001').then(response => response.json());
      setKey(auth.key);
      setToken(auth.token);
    })();
    (async function () {
      const data = await fetch('http://localhost:4001/dashb').then(response => response.json());
      setDashboard(data);
    }

    )();
  }, []);

  const refreshData = () => {
      dashboardInstance.current?.reloadDashboard();
  };

  return (
    <div className="App">
      <button
        className="btn btn-primary float-right my-3 mr-3"
        onClick={(e) => refreshData()}
      >
        Reload Dashboard
      </button>
      <CumulioDashboardComponent
        ref={dashboardInstance}
        authKey={key}
        authToken={token}
        dashboardId={dashboard.id}
        appServer={appServer}
        apiHost={apiHost}
        mainColor="pink"
        accentColor="black"
        loaderSpinnerColor="rgb(0, 81, 126)"
        loaderSpinnerBackground="rgb(236 248 255)"
        itemsRendered={(e) => console.log("itemsRendered", e)}
        exported={(e) => console.log("exported", e)}
        load={(e) => console.log("load", e)}
      ></CumulioDashboardComponent>
    </div>
  );
}

export default App;
