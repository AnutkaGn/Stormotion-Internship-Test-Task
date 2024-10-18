import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '~/pages/home/home';
import { Game } from '~/pages/game/game';
import { SelectMode } from '~/pages/select-mode/select-mode';
import { GameSettings } from '~/pages/game-settings/game-settings';

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/select-mode" element={<SelectMode />} />
        <Route path="/settings" element={<GameSettings />} />
      </Routes>
    </Router>
  );
};

export { App };
