import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Story } from './pages/Story';
import {Practice} from './pages/Practice'
import Nested from './pages/Nested/NestedCheckbox'
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
				<Router>
					<Route path="/" component={() => (<div>Main Page</div>)} />
					<Route path="/practice" component={Practice} />
					<Route path="/nested" component={Nested} />
					<Route path="/stories" component={Story} />
					<Route default component={NotFound} />
				</Router>
		</LocationProvider>
	);
}

render(<App />, document.body);
