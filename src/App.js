import './App.css';
import {Provider} from 'react-redux'
import Store from './store/Store'
import Inside from './Inside'


function App() {
	
  return (
		<>
			<Provider store={Store}>
				<Inside />
			</Provider>
		</>
	);
}


export default App 