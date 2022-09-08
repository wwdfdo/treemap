import { createContext } from 'react';

import Chart from './components/Chart';

export const DilanContext = createContext(null);

function App() {
	return <Chart />;
}

export default App;
