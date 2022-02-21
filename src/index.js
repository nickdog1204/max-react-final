import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider} from "react-redux";
import * as fromStore from './store'

ReactDOM.render(<Provider store={fromStore.store}><App/></Provider>, document.getElementById('root'));
