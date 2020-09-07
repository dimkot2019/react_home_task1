import React from 'react';
import logo from './logo.svg';
import './App.css';


function CounterHeader (props) {

    const { fio, email, phone, address } = props;
  
    return (<h4>ФИО: { fio },<br></br> 
                Эл. почта: { email },<br></br>
                Телефон: {phone},<br></br>
                Адрес: {address} </h4>
            );
  }

function App() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <CounterHeader fio = 'Семен Семеныч Горбунков' 
                         email = 'gorbunkov@mail.ru' 
                         phone = '555-55-55' 
                         address = 'Москва ул. Первомайская 79 кв.21'
                         />
          <h1>Functional component</h1>
        </header>
      </div>
    );
  }

export class AppClass extends React.Component {

  state = { 
    fio: 'Семен Семеныч Горбунков',
    email: 'gorbunkov@mail.ru',
    phone: '555-55-55', 
    address: 'Москва ул. Первомайская 79 кв.21'
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <CounterHeader fio={ this.state.fio } 
                         email = { this.state.email }   
                         phone = { this.state.phone }   
                         address = { this.state.address }   
                         />
          <h1>Class-based component</h1>

        </header>
      </div>
    );
  }
}

export default App;