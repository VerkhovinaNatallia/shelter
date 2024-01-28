import styled from 'styled-components';
import './App.css';

import Header from './Components/Header/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <AppStyled>
      <Header/>
      <Main/>
      <Footer/>
    </AppStyled>
  );
}

const AppStyled=styled.div`
max-width:1280px;
margin:0 auto;
`
export default App;


