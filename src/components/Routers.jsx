import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Elements/Navigation';
import Home from './Pages/Home';
import ReusableForm from './Pages/ReusableForm';

export default function Routers() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-container">
          <div className="app-inside">
            <p><span>HTML5 + SCSS + JavaScript (JSX, ES7)</span><br />💖 React.js 💖</p>
            <Navigation />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reusable-form" component={ReusableForm} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
