import React from 'react';
import irises from '../Multimedia/Irises.jpeg';
import sunflowers from '../Multimedia/Sunflowers.jpeg';
import wheatfield from '../Multimedia/Land1.jpeg';

export function VanGogh1() {
  return (
    <div className="bg-yellow-200">
      {/* Titulo */}
      <div className="w-full">
        <h1 className="text-center text-xl text-black py-10 bg-yellow-800 bg-opacity-10 font-bold">
          Paintings - Van Gogh
        </h1>
      </div>

      {/* Imagen texto 1 */}
      <div className="flex px-20 py-5 w-full justify-evenly mt-8 items-stretch">
        <div className="w-full basis-1/2 text-justify flex items-center mr-4 text-black font-semibold rounded-md">
          Irises
          <br />
          Vincent van Gogh (1853 - 1890), Saint-Rémy-de-Provence, May 1890 oil on canvas, 92.7 cm x 73.9 cm
          <br />
          <br />
          Van Gogh painted this still life in the psychiatric hospital in Saint-Rémy. For him, the painting was mainly a study in colour. He set out to achieve a powerful colour contrast. By placing the purple flowers against a yellow background, he made the decorative forms stand out even more strongly. The irises were originally purple. But as the red pigment has faded, they have turned blue. Van Gogh made two paintings of this bouquet. In the other still life, he contrasted purple and pink with green.
        </div>
        <div className="basis-1/3">
          <img className="w-full rounded-lg" src={irises} alt="Irises" />
        </div>
      </div>

      {/* Imagen texto 2 */}
      <div className="flex px-20 py-3 w-full justify-evenly mt-8 items-stretch">
        <div className="basis-1/3">
          <img className="rounded-lg" src={sunflowers} width={500} height={450} alt="Sunflowers" />
        </div>
        <div className="w-full basis-1/2 text-justify flex items-center mr-4 text-black font-semibold rounded-md">
          Sunflowers
          <br />
          Vincent van Gogh (1853 - 1890), Arles, January 1889 oil on canvas, 95 cm x 73 cm
          <br />
          <br />
          Van Gogh’s paintings of Sunflowers are among his most famous. He did them in Arles, in the south of France, in 1888 and 1889. Vincent painted a total of five large canvases with sunflowers in a vase, with three shades of yellow ‘and nothing else’. In this way, he demonstrated that it was possible to create an image with numerous variations of a single colour, without any loss of eloquence.
          <br />
          <br />
          The sunflower paintings had a special significance for Van Gogh: they communicated ‘gratitude’, he wrote. He hung the first two in the room of his friend, the painter Paul Gauguin, who came to live with him for a while in the Yellow House. Gauguin was impressed by the sunflowers, which he thought were ‘completely Vincent’. Van Gogh had already painted a new version during his friend’s stay and Gauguin later asked for one as a gift, which Vincent was reluctant to give him. He later produced two loose copies, however, one of which is now in the Van Gogh Museum.
        </div>
      </div>

      {/* Imagen texto 3 */}
      <div className="flex px-20 py-5 w-full justify-evenly mt-8 items-stretch">
        <div className="w-full basis-1/2 text-justify flex items-center mr-4 text-black font-semibold rounded-md">
          Wheatfield with a Reaper
          <br />
          Vincent van Gogh (1853 - 1890), Saint-Rémy-de-Provence, September 1889 oil on canvas, 73.2 cm x 92.7 cm
          <br />
          Van Gogh painted this walled field from his hospital room. For the first few months that he was there, he was not allowed to leave the grounds.
          <br />
          The reaper labours in the heat of the sun. The wheat, painted with thick gobs of yellow, undulates around him. For Van Gogh, wheat was a symbol of the eternal cycle of nature and the transience of life. He saw the reaper as 'the image of death . . . in this sense that humanity would be the wheat being reaped.'
          <br />
          He added, however, that this death was 'almost smiling. It's all yellow except for a line of violet hills – a pale, blond yellow. I myself find that funny, that I saw it like that through the iron bars of a cell.'
        </div>
        <div className="basis-1/3">
          <img className="w-full rounded-lg" src={wheatfield} alt="Wheatfield with a Reaper" />
        </div>
      </div>
    </div>
  );
}
