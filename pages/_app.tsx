import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import './components/Login/Login.css';
import { AppProvider } from './Context/AppContext';
import './Dashboard.css';
import './Layout/LeftContainer.css';
import './Layout/RightContainer.css';
import './components/Todos/Todos.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
