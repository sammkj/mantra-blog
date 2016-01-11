import Navigations from '../navigations/index.jsx';

const Layout = () => (
  <div>
    <header>
    <h1>Mantra Voice</h1>
    <Navigations />
    </header>

    <div>
      {this.props.children}
    </div>

    <footer>
    <small>Mantra is an application architecture for Meteor.</small>
    </footer>
  </div>
);

export default Layout;
