import { useNavigate, useParams } from 'react-router-dom';
import { IMAGES } from './constant';
import { Image } from './Image';

export function Modal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  const back = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        className='modal'
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} />
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}
