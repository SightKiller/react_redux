import logo from './logo.svg';
import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import {Provider} from 'react-redux';
import { store } from './store';
import CarAdd from './CarAdd';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <h1>React Redux Customer Example</h1>
          <CustomerAdd />
          <CustomerView  />
          <CarAdd/>
        </div>
    </Provider>
  );
}

export default App;
