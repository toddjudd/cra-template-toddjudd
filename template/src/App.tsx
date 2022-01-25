import { Landing } from '@/features/misc';
import { AppProvider } from '@/providers/app';

const App = () => {
  return (
    <AppProvider>
      <Landing />
    </AppProvider>
  );
};

export default App;
