import Header from './components/Header';
import { NavigateProvider } from './context/NavigateContext';
import Sections from './pages/Sections';

function App() {
  return (
    <NavigateProvider>
      <Header />
      <Sections />
    </NavigateProvider>
  );
}

export default App;
