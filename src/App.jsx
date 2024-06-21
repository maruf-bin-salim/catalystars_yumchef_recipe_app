import {
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';

import { RecipeProvider } from './contexts/RecipeContext';
import { Home } from './pages/Home';
import { Edit } from './pages/Edit';
import { Add } from './pages/Add';
import { Recipe } from './pages/Recipe';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;