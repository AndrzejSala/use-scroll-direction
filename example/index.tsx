import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {WindowExample} from "./components/examples/WindowExample";
import {ComponentRefExample} from "./components/examples/ComponentRefExample";

const App = () => {
  const [scrollDirection, setScrollDirection] = React.useState();

  console.log('###6', scrollDirection);

  const onChangeScrollDirection = (newScrollDirection) => setScrollDirection(newScrollDirection);

  return (
    <Router>
      <div>
        <div className="header">
          <div className="title">
            use-scroll-direction demo
          </div>
          <div className="actions">
            <nav className="navigation">
              <ul className="navigationList">
                <li className="navigationItem">
                  <Link to="/window-example">Scroll position on window</Link>
                </li>
                <li className="navigationItem">
                  <Link to="/ref-example">Scroll on an element ref</Link>
                </li>
              </ul>
            </nav>
            <div className="scrollDirection">SCROLL DIRECTION: <span className="value">{scrollDirection}</span></div>
          </div>
        </div>
        <div className="exampleContainer">
          <Switch>
            <Route path="/window-example">
              <WindowExample onChangeScrollDirection={onChangeScrollDirection} />
            </Route>
            <Route path="/ref-example">
              <ComponentRefExample onChangeScrollDirection={onChangeScrollDirection} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
