import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
