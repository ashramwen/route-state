import { Link } from 'react-router-dom';
import { IMAGES } from './constant';

export function Home() {
  return (
    <div>
      <Link to='/gallery'>Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        {IMAGES.map((o) => (
          <li key={o.id}>
            <Link to={`/img/${o.id}`}>{o.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
