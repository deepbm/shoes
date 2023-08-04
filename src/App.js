import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import { UserProvider } from './contexts/UserContext';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
