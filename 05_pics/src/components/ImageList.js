import React from 'react';

const ImageList = props => {
  const {images} = props;
  console.log ('ImageLst', images);

  //   const imagesHTML = images.map (image => {
  //     return <img key={image.id}  alt={image.description} src={image.urls.regular} />;
  //   });

  const imagesHTML = images.map (({description, id, urls}) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });

  return (
    <div>
      {imagesHTML}
    </div>
  );
};

export default ImageList;
