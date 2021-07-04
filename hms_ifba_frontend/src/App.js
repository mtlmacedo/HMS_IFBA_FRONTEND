import React, { useEffect, useState } from 'react';
import './App.css';
import ServicesList from './components/ServicesList';
import ListLoad from './components/ListLoad';
import LoginTab from './components/Login';
import MenuBar from './components/MenuBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6d1b7b',
      main: '#9c27b0',
      dark: '#af52bf',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
function App() {
  const ListLoading = ListLoad(ServicesList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/servicos/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div className='container'>
          <div className='menu'>
          <MenuBar></MenuBar>
          </div>
          <div className='repo-container'>
            <LoginTab></LoginTab>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
