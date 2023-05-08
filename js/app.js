import React, { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('painted'); // 默认选中的过滤器值为 painted
  const images = {
    painted: [
      { src: 'img/porfolio/painted-1.jpg', alt: 'painted Image' },
      { src: 'img/porfolio/painted-2.jpg', alt: 'painted Image' },
      { src: 'img/porfolio/painted-3.jpg', alt: 'painted Image' },
    ],
    banners: [
      { src: 'img/porfolio/banner-1.jpg', alt: 'banner Image' },
      { src: 'img/porfolio/banner-2.jpg', alt: 'banner Image' },
      { src: 'img/porfolio/banner-3.jpg', alt: 'banner Image' },
    ],
    posters: [
      { src: 'img/porfolio/poster-1.jpg', alt: 'poster Image' },
      { src: 'img/porfolio/poster-2.jpg', alt: 'poster Image' },
      { src: 'img/porfolio/poster-3.jpg', alt: 'poster Image' },
    ],
    'digital-drawing': [
      { src: 'img/porfolio/digital-drawing-1.jpg', alt: 'digital Drawing Image' },
      { src: 'img/porfolio/digital-drawing-2.jpg', alt: 'digital Drawing Image' },
      { src: 'img/porfolio/digital-drawing-3.jpg', alt: 'digital Drawing Image' },
    ],
    logo: [
      { src: 'img/porfolio/logo-1.jpg', alt: 'logo Image' },
      { src: 'img/porfolio/logo-2.jpg', alt: 'logo Image' },
      { src: 'img/porfolio/logo-3.jpg', alt: 'logo Image' },
    ],
  };

  const handleFilterClick = (value) => {
    setFilter(value); // 点击过滤器时更新当前选中的过滤器值
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 portfolio-filter text-center">
          <ul>
            <li className={`c-pointer ${filter === 'painted' ? 'active' : ''}`} data-filter="painted" onClick={() => handleFilterClick('painted')}>
              <a href="#painted">painted</a>
            </li>
            <li className={`c-pointer ${filter === 'banners' ? 'active' : ''}`} data-filter="banners" onClick={() => handleFilterClick('banners')}>
              <a href="#banners">banner</a>
            </li>
            <li className={`c-pointer ${filter === 'posters' ? 'active' : ''}`} data-filter="posters" onClick={() => handleFilterClick('posters')}>
              <a href="#posters">poster</a>
            </li>
            <li className={`c-pointer ${filter === 'digital-drawing' ? 'active' : ''}`} data-filter="digital-drawing" onClick={() => handleFilterClick('digital-drawing')}>
              <a href="#digital-drawing">digital drawing</a>
            </li>
            <li className={`c-pointer ${filter === 'logo' ? 'active' : ''}`} data-filter="logo" onClick={() => handleFilterClick('logo')}>
              <a href="#logo">logo</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        {images[filter].map((image, index) => (
          <div className="col-md-4" key={index}>
            <div className="portfolio-item">
              <div className="thumb">
                <a href={image.src} className="fancybox" rel="gallery">
                  <img src={image.src} alt={image.alt} className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
