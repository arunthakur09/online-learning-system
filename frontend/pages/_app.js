import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Nav from '../components/Nav';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Nav />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
