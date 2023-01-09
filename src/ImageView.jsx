import { useParams } from 'react-router-dom';
import { IMAGES } from './constant';
import { Image } from './Image';

export function ImageView() {
  const { id } = useParams();
  const image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}
