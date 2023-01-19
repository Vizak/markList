import { React, useState } from 'react';
import './App.scss';
import MarkSheet from './components/MarkSheet';
import data from './services/data';

const initialMarkSheet = { markList: data };

const App = (context) => {
	const [state, setState] = useState(initialMarkSheet);

	return <div className="App" role="App">
		<MarkSheet { ...{ ...context, state, setState } }/>
	</div>;
};

export default App;
