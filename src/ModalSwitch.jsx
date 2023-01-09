import { useLocation, Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';
import { ImageView } from './ImageView';
import { Home } from './Home';
import { Modal } from './Modal';

export function ModalSwitch() {
  const location = useLocation();

  const background = location?.state?.background;

  return (
    <div style={{ padding: '2rem' }}>
      <Routes location={background || location}>
        <Route exact path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/img/:id' element={<ImageView />} />
      </Routes>

      {background && (
        <Routes>
          <Route path='/img/:id' element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}
