import React from 'react';
import picasso from '../Multimedia/picasso.png';
import picasso2 from '../Multimedia/picasso2.png';
import picasso3 from '../Multimedia/picasso3.png';

export function Picasso1() {
  return (
    <div className="bg-gray-600">
      {/* Titulo */}
      <div className="w-full">
        <h1 className="text-center text-xl text-white py-10 bg-black bg-opacity-10 font-bold">
          Paintings - Pablo Picasso
        </h1>
      </div>

      {/* Imagen texto 1 */}
      <div className="flex px-20 py-5 w-full justify-evenly mt-8 items-stretch">
        <div className="w-full basis-1/2 text-justify flex items-center mr-4 text-white font-semibold rounded-md">
          Autorretrato (1907)
          <br />
          El "Autorretrato" (1907) de Pablo Picasso es uno de sus cuadros más importantes dentro de su periodo conocido como el Proto-Cubismo, que precede a su etapa cubista más madura. Este cuadro ofrece una representación introspectiva y experimental del propio artista, utilizando elementos que anticipan el desarrollo de su estilo cubista. En la pintura, Picasso se retrata a sí mismo con un estilo que rompe con las convenciones del realismo. Su rostro está compuesto por formas angulares y geométricas, lo que evidencia una influencia de las máscaras africanas que Picasso había empezado a coleccionar y que impactaron profundamente en su trabajo. Las líneas y colores planos son predominantes, contribuyendo a una sensación de abstracción y fragmentación que se convertiría en característica del cubismo.
          <br />
          <br />
        </div>
        <div className="basis-1/3">
          <img className="w-full rounded-lg" src={picasso} alt="Autorretrato 1907" />
        </div>
      </div>

      {/* Imagen texto 2 */}
      <div className="flex px-20 py-3 w-full justify-evenly mt-8 items-stretch">
        <div className="basis-1/3">
          <img
            className="rounded-lg"
            src={picasso2}
            width="500"
            height="450"
            alt="El sueño 1932"
          />
        </div>
        <div className="w-full basis-1/2 text-justify flex items-center mr-4 text-white font-semibold rounded-md">
          El sueño (1932)
          <br />
          Este cuadro, uno de los más famosos e importantes de Picasso, representa a su amante Marie-Thérèse Walter en un estado de ensueño. La obra captura a Marie-Thérèse dormida en un sillón, con la cabeza apoyada sobre un hombro y las manos descansando en su regazo. Su rostro se presenta con una división estilística que es característica del cubismo, creando una dualidad entre la serenidad y la sensualidad. Los colores vibrantes, dominados por tonos de rojo, amarillo y verde, realzan la sensación onírica de la escena. Picasso utiliza líneas suaves y formas redondeadas para acentuar la feminidad y voluptuosidad de su musa. La composición y la postura de la figura sugieren un sentido de paz y abandono. Sin embargo, algunos detalles, como la representación abstracta del rostro, también insinúan una complejidad emocional subyacente.
          <br />
        </div>
      </div>

      {/* Imagen texto 3 */}
      <div className="flex px-20 py-5 w-full justify-evenly mt-8 items-stretch">
        <div className="w-full basis-1/2 text-justify flex items-center mr-4 text-white font-semibold rounded-md">
          El viejo guitarrista ciego (1903)
          <br />
          "El viejo guitarrista ciego" (1903) de Pablo Picasso es un famoso cuadro de su Periodo Azul, creado en Barcelona. Este cuadro representa a un anciano ciego y desaliñado, sentado con una guitarra, sumido en la melancolía. Dominado por tonos azules fríos, la pintura expresa una profunda tristeza y soledad, reflejando las dificultades y el aislamiento de los marginados sociales. El cuerpo alargado y desproporcionado del guitarrista añade un aire de fragilidad y desamparo, mientras la guitarra, en un tono marrón contrastante, simboliza su única fuente de consuelo y conexión con el mundo.
          <br />
        </div>
        <div className="basis-1/3">
          <img className="w-full rounded-lg" src={picasso3} alt="El viejo guitarrista ciego 1903" />
        </div>
      </div>
    </div>
  );
}
