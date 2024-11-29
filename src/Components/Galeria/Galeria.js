import React, { useState } from 'react';
import './Galeria.css';

import imagen1 from '../Assets/imagen1.jpg';
import imagen2 from '../Assets/imagen2.jpg';
import imagen3 from '../Assets/imagen3.jpg';
import imagen4 from '../Assets/imagen4.jpg';
import imagen5 from '../Assets/imagen5.jpg';
import imagen6 from '../Assets/imagen6.jpg';
import imagen7 from '../Assets/imagen7.jpg';
import imagen8 from '../Assets/imagen8.jpg';

const imageList = [
  { title: 'Garden with Courting Couples: Square Saint-Pierre', autor: 'Vincent van Gogh (1853 - 1890), Paris, May 1887', description: 'Van Gogh called this sunny park scene the painting of the garden with lovers', src: imagen1 }, 
  { title: 'Head of a Skeleton with a Burning Cigarette', autor: 'Vincent van Gogh (1853 - 1890), Antwerp, January-February 1886', description: 'This skeleton with a lit cigarette in its mouth is a juvenile joke. Van Gogh painted it in early 1886, while studying at the art academy in Antwerp. The painting shows that he had a good command of anatomy.', src: imagen2 },
  { title: "The Cottage", autor: 'Vincent van Gogh (1853 - 1890), Nuenen, May 1885', description: 'The old cottage beneath the red evening sky presents an idyllic picture of rural life. Van Gogh called these humble farmhouses people s nests. He felt they had a sheltering quality.', src: imagen3 },
  { title: "Landscape at Twilight", autor: 'Vincent van Gogh (1853 - 1890), Auvers-sur-Oise, June 1890', description: 'Van Gogh made this evening landscape in the fields near Auvers, with a view of the local castle. He rendered the tangled black branches of the pear trees with a flurry of black brushstrokes.', src: imagen4 },
  { title: "Flying Fox", autor: 'Vincent van Gogh (1853 - 1890), Nuenen, October-November 1884', description: 'This is a type of tropical bat an unusual subject for an artist. The one painted by Van Gogh was stuffed and mounted. Just look at its stiff, unnatural pose.', src: imagen5 },
  { title: "Study of a Martinican Woman", autor: 'Paul Gauguin (1848 - 1903), 1887', description: 'He was most captivated by the Black porteuses he saw on the island.01 These women carried on their heads large baskets of sugar cane and other produce from the plantations to the markets and the harbour of Saint-Pierre, then the capital of the French colony.', src: imagen6 },
  { title: "Irises", autor: 'Vincent van Gogh (1853 - 1890), Saint-Rémy-de-Provence, May 1890', description: 'He set out to achieve a powerful colour contrast. By placing the purple flowers against a yellow background, he made the decorative forms stand out even more strongly. The irises were originally purple. But as the red pigment has faded, they have turned blue. ', src: imagen7 },
  { title: "Portrait of Andries and Annie Bonger with the Artist", autor: 'Emile Bernard (1868 - 1941), Amsterdam, 1908', description: 'In 1888, Anne Marie Louise married Andries Bonger, a friend of Theo van Gogh (Vincent’s brother) and of the French painters Emile Bernard and Redon.', src: imagen8 },
];

export function Galeria() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);  // Actualiza el estado con lo que el usuario escribe
  };

  const filteredImages = imageList.filter((image) =>
    image.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstRow = filteredImages.slice(0, 4);
  const secondRow = filteredImages.slice(4, 8);

  return (
    <div className="galeria-page">
      <div className="App">
        {/* Input de búsqueda */}
        <input 
          type="text" 
          className="search-input" 
          placeholder="Buscar..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
      </div>
      <div className="gallery-container">
        {firstRow.length > 0 ? (
          firstRow.map((image, index) => (
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
          <p className="no-results">No se encontraron resultados</p>
        )}
      </div>
      <div className="gallery-container">
        {secondRow.length > 0 ? (
          secondRow.map((image, index) => (
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
          <p className="no-results">No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}


