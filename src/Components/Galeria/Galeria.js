import React from 'react';
import './Galeria.css';

import imagen1 from '../Assets/imagen1.jpg';
import imagen2 from '../Assets/imagen2.jpg';
import imagen3 from '../Assets/imagen3.jpg';
import imagen4 from '../Assets/imagen4.jpg';
import imagen5 from '../Assets/imagen5.jpg';
import imagen6 from '../Assets/imagen6.jpg';

const imageList = [
  { title: 'Garden with Courting Couples: Square Saint-Pierre', autor: 'Vincent van Gogh (1853 - 1890), Paris, May 1887', description: 'Van Gogh called this sunny park scene the painting of the garden with lovers', src: imagen1 }, 
  { title: 'Head of a Skeleton with a Burning Cigarette', autor: 'Vincent van Gogh (1853 - 1890), Antwerp, January-February 1886', description: 'This skeleton with a lit cigarette in its mouth is a juvenile joke. Van Gogh painted it in early 1886, while studying at the art academy in Antwerp. The painting shows that he had a good command of anatomy.', src: imagen2 },
  { title: "The Cottage", autor: 'Vincent van Gogh (1853 - 1890), Nuenen, May 1885', description: 'The old cottage beneath the red evening sky presents an idyllic picture of rural life. Van Gogh called these humble farmhouses people s nests. He felt they had a sheltering quality.', src: imagen3 },
  { title: "Landscape at Twilight", autor: 'Vincent van Gogh (1853 - 1890), Auvers-sur-Oise, June 1890', description: 'Van Gogh made this evening landscape in the fields near Auvers, with a view of the local castle. He rendered the tangled black branches of the pear trees with a flurry of black brushstrokes.', src: imagen4 },
  { title: "Flying Fox", autor: 'Vincent van Gogh (1853 - 1890), Nuenen, October-November 1884', description: 'This is a type of tropical bat an unusual subject for an artist. The one painted by Van Gogh was stuffed and mounted. Just look at its stiff, unnatural pose.', src: imagen5 },
  { title: "Study of a Martinican Woman", autor: 'Paul Gauguin (1848 - 1903), 1887', description: 'He was most captivated by the Black porteuses he saw on the island.01 These women carried on their heads large baskets of sugar cane and other produce from the plantations to the markets and the harbour of Saint-Pierre, then the capital of the French colony.', src: imagen6 },
];

export function Galeria({ searchTerm = '' }) {
  const filteredImages = imageList.filter((image) =>
    (image.autor?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
    (image.title?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
    (image.description?.toLowerCase().includes(searchTerm.toLowerCase()) || '')
  );

  return (
    <div className="gallery-container">
      {filteredImages.length > 0 ? (
        filteredImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="gallery-info">
              <h3>{image.title}</h3>
              <p>{image.autor}</p>
              <p>{image.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}
