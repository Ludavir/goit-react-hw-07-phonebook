import { Provider } from 'react-redux';
import store from 'redux/store';

import './App.css';
import Form from 'components/ContactAdd'
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Tittle from 'components/Tittle';

const App = () => {

    return (
      <div className="App">
        <Provider store={store}>
            <Tittle text="Nombre"/>
            <Form/>
            <Tittle text="Contacts"/>
            <Filter/>
            <Contacts/>
        </Provider>

      </div>

    )
}

export default App;