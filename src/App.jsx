import React, { useState } from 'react';
import CanLanding from './components/CanLanding';
import Portfolio from './components/Portfolio';

function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'portfolio'

  return (
    <div className="app-main-wrapper">
      {view === 'landing' ? (
        <CanLanding onOpenPortfolio={() => setView('portfolio')} />
      ) : (
        <Portfolio onReplayCan={() => setView('landing')} />
      )}
    </div>
  );
}

export default App;
