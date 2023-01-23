import { React, useState } from 'react';
import './App.scss';
import MarkSheet from './components/MarkSheet';
import data from './services/data';

const initialMarkSheet = {
	markSheet: data,
	currentMark: {
		name: 'vikas',
		rollNo: 5,
		tamil: 70,
		english: 80,
		maths: 50,
		science: 90,
		social: 98,
	},
};

const App = (context) => {
	const [state, setState] = useState(initialMarkSheet);
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<MarkSheet { ...extendedContext }/>
	</div>;
};

export default App;
