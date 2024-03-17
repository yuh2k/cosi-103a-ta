import { render, screen } from '@testing-library/react';
import CookingMode from '../../pages/cookingModepages/cookingModeData.js';

test('displays the correct carousel slides', () => {
  const slides = [
    { imageUrl: 'image1.jpg', heading: 'Heading 1', caption: 'Caption 1' },
    { imageUrl: 'image2.jpg', heading: 'Heading 2', caption: 'Caption 2' },
  ];

  render(<CookingMode slides={slides} />);

  slides.forEach((slide, index) => {
    const img = screen.getByAltText(`Slide ${index + 1}`);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', slide.imageUrl);
    expect(screen.getByText(slide.heading)).toBeInTheDocument();
    expect(screen.getByText(slide.caption)).toBeInTheDocument();
  });
});