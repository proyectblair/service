import React from 'react';
import { Paper, Slide, useMediaQuery } from '@mui/material';
import imageSlider from '../../assets/image-slider.png';
import imageSlider2 from '../../assets/image-slider2.png';
import Box from '@mui/material/Box';

const Slider = () => {
  const isMobile = useMediaQuery('(max-width: 426px)');

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
    <Box maxWidth="xl" display="flex" alignItems="center" justifyContent= "center">
      <Slide 
        direction="left" in={showImage} onExited={() => {}}>
        <Paper>
          <img 
            src={images[currentImageIndex]} 
            alt={`Slide ${currentImageIndex + 1}`} 
            style={{ 
              width: '100%', // Ancho del 100% independientemente del tamaño de la pantalla
              height: isMobile ? '279px' : 'auto', // Establece la altura en función de isMobile
              objectFit: 'cover', // Asegura que la imagen se ajuste al contenedor sin distorsionarse
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto'
            }} 
          />
        </Paper>
      </Slide>
    </Box>
  );
};

export default Slider;






