import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
