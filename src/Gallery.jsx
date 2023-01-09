import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from './constant';
import { Thumbnail } from './Thumbnail';

export function Gallery() {
  const location = useLocation();

  return (
    <div>
      <p>
        <Link to='/'>Go back Home</Link>
      </p>

      {IMAGES.map((i) => (
        <Link key={i.id} to={`/img/${i.id}`} state={{ background: location }}>
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
}
