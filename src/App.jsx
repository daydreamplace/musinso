import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme';
import GlobalStyle from './GlobalStyle';
import { Header } from './layout';
import Main from './pages/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
