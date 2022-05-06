import React from 'react';
import Modal from 'react-modal';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';


Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Header />
      <Board />
      
      <GlobalStyle />
    </>
  );
}

export default App;
