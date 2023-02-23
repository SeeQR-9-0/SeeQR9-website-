import React from 'react';
import '../styles/Banner.css';

interface Image {
  id: number;
  image: string;
}

interface BannerProps {
  images: Image[];
  speed?: number;
}

const Banner: React.FC<BannerProps> = ({ images, speed = 5000 }) => {
  return (
    <div className="Banner">
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <h1>{image}</h1>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <h1>{image}</h1>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <h1>{image}</h1>
            </div>
          ))}
        </section>
      </div>
    </div>
    </div>
  );
};

export { Banner };
