import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';

const socket = io();

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button type='button' className='btn btn-primary'>
          This is a bootstrap button
        </button>
      </>
    );
  }
}

export default App;