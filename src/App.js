import c from 'classnames';
import { BrowserRouter as Router } from 'react-router-dom';

import './sass/App.scss';

function App({ children }) {
  return (
    <Router>
      <div className={c('app')}>
        {children}
      </div>
    </Router>
  );
}

export default App;
