import { useEffect, useState } from 'react';
import Header from './components/Header';
import { NavigateProvider } from './context/NavigateContext';
import Sections from './pages/Sections';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <NavigateProvider>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Sections />
        </>
      )}
    </NavigateProvider>
  );
}

export default App;
