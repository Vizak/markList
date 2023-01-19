import { React, useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton';
import MarkSheet from './components/MarkSheet';
import TextBox from './components/TextBox';
import data from './services/data';

const initialMarkSheet = {
	currMarkSheet: data,
	marks: {
		rollNo: 5,
		name: '',
		tamil: 0,
		english: 0,
		maths: 0,
		science: 0,
		social: 0,
	},
};

const App = (context) => {
	const [state, setState] = useState(initialMarkSheet);
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<MarkSheet { ...extendedContext }/>
		<TextBox { ...extendedContext }/>
		<AddButton { ...extendedContext }/>
	</div>;
};

export default App;
