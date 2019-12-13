import './ImageList.css';

import React from 'react';

import ImageCard from './ImageCard';

const ImageList = props => {
  const {images} = props;
  console.log ('ImageLst', images);

  //   const imagesHTML = images.map (image => {
  //     return <img key={image.id}  alt={image.description} src={image.urls.regular} />;
  //   });

  // const imagesHTML = images.map (({description, id, urls}) => {
  //   return <img key={id} alt={description} src={urls.regular} />;
  // });

  const imagesHTML = images.map (image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-list">
      {imagesHTML}
    </div>
  );
};

export default ImageList;
