import React from 'react';
import QueueManager from './components/QueueManager';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Heade';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="mt-4" >
        <h1>Queue Manager</h1>
        <QueueManager />
      </Container>
    </div>
  );
}

export default App;