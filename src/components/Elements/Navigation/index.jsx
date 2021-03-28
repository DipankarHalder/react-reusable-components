import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="app-navigation-wrapper">
      <ul className="app-navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reusable-form">Reusable Form</Link></li>
        <li><Link to="/">Custom useHooks</Link></li>
      </ul>
    </div>
  )
}
