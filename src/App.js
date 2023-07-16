import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserProvider } from './contexts/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
