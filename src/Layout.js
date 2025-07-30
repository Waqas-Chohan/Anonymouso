import { Outlet, Link } from "react-router-dom";
import Myheader from './component/header';

const Layout = () => {
  return (
    <>
      <Myheader />
      <nav style={{
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/students" style={linkStyle}>Students</Link>
          </li>
          <li>
            <Link to="/quotes" style={linkStyle}>Quotes</Link>
          </li>
          <li>
            <Link to="/todo" style={linkStyle}>Todo List</Link>
          </li>
          <li>
            <Link to="/counter" style={linkStyle}>Counter</Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#212529',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#e9ecef'
  }
};

export default Layout;