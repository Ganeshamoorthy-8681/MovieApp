import { Link } from "react-router";

const AppNotFound = () =>
{
  console.log("NOT FOUND...")
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={styles.icon}
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12" y2="17"></line>
        </svg>
        <h1 style={styles.heading}>404 - Page Not Found</h1>
        <p style={styles.text}>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  content: {
    textAlign: 'center',
  },
  icon: {
    marginBottom: '20px',
    color: '#dc3545',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#343a40',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#6c757d',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default AppNotFound;
