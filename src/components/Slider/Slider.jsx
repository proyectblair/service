import React from 'react';
import { Paper, Slide } from '@mui/material';
import imageSlider from '../../assets/image-slider.png';
import imageSlider2 from '../../assets/image-slider2.png';

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [showImage, setShowImage] = React.useState(true);

  const images = [imageSlider, imageSlider2];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowImage(false);
      setTimeout(() => {
        setShowImage(true);
      }, 300); // Tiempo de transición 
    }, 6000); // Tiempo de cambio de imagen 

    return () => clearInterval(interval); 
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <Slide direction="left" in={showImage} onExited={() => {}}>
        <Paper>
          <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} style={{ width: '100%' }} />
        </Paper>
      </Slide>
    </div>
  );
};

export default Slider;



