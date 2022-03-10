import NavBar from '../components/organisms/navBar/NavBar'
import Footer from '../components/organisms/footer/Footer'

const questions = [
  {
    description: '¿Qué objeto de tu infancia guardarías con especial cariño a lo largo del tiempo?',
    option1: 'El laboratorio de química',
    option2: 'El coche teledirigido',
    option3: 'Tu primer diario',
    option4: 'Tu primer dibujo'
  },
  {
    description: 'Planeas viajar a un país, ¿qué te gustaría saber?',
    option1: ' Si cuenta con alguna reserva natural',
    option2: 'Cómo son sus ciudades',
    option3: 'Cuáles son sus comidas y costumbres',
    option4: 'Qué museos tiene, cómo es su arte, su pintura y su arquitectura'
  },
  {
    description: 'Te entretienes más...',
    option1: 'Haciendo experimentos',
    option2: 'Construyendo una maqueta',
    option3: 'Leyendo una buena novela',
    option4: 'Pintando o visitando un museo'
  },
  {
    description: 'Te gustaría tener en tu casa...',
    option1: 'Un espacio para la colección de minerales',
    option2: 'Conexión a Internet',
    option3: 'Un armario lleno de libros',
    option4: 'Una litografía de uno de tus cuadros favoritos'
  },
  {
    description: 'Si puedes eliges tema de conversación, prefieres hablar de...',
    option1: 'Los nuevos avances médicos',
    option2: 'El último diseño de coche',
    option3: 'Los problemas sociales actuales',
    option4: 'El arte o la moda'
  },
  {
    description: '¿Qué regalo te gustaría recibir?',
    option1: 'Un telescopio',
    option2: 'Una agenda electrónica',
    option3: 'Una novela',
    option4: 'Un libro de arte'
  },
  {
    description: 'Si te ofrecen una excursión, preferirías ir a...',
    option1: 'El Centro de Investigaciones Oncológicas',
    option2: 'Las instalaciones de la NASA',
    option3: 'La redacción de un periódico',
    option4: 'El Museo del Prado'
  },
  {
    description: 'Si tuvieras que elegir una película, preferirías ver...',
    option1: 'Una verdad incómoda',
    option2: 'Los cuatro fantásticos',
    option3: 'Babe',
    option4: 'María Antonieta'
  },
  {
    description: '¿Qué te apetecería leer?',
    option1: 'Cualquier  número  de  Reportero Doc',
    option2: 'Cualquier clásico de Julio Verne',
    option3: 'Cualquier novela',
    option4: 'Un  buen  libro  de  arte,  diseño, fotografía'
  },
  {
    description: 'Si te presentases a un premio, te gustaría que fuese gracias a...',
    option1: 'Una nueva vacuna',
    option2: 'Un invento mecánico',
    option3: 'Una obra literaria',
    option4: 'Una escultura o una pintura'
  },
  {
    description: '¿Qué trabajo desempeñarías con más gusto?',
    option1: 'Investigación en un laboratorio',
    option2: 'Diseño de un proyecto de ingeniería',
    option3: 'Asistencia a colectivos desfavorecidos',
    option4: 'Restaurador en un museo'
  },
  {
    description: 'Si tuvieras que escribir un artículo en un periódico, éste trataría sobre...',
    option1: 'Energía solar',
    option2: 'Construcción de aviones',
    option3: 'Los conflictos olvidados',
    option4: 'Las obras de Dalí'
  },
  {
    description: '¿Con quién compartirías una tarde de charla?',
    option1: 'Pedro Duque',
    option2: 'Bill Gates',
    option3: ' J.K. Rowling',
    option4: 'Alejandro Amenábar'
  },
  {
    description: '¿Cuál es tu sección favorita del periódico?',
    option1: 'Medio Ambiente',
    option2: 'Tecnología',
    option3: 'Sociedad',
    option4: 'Arte y Cultura'
  },
  {
    description: 'Si fueras famoso... ¿por qué te gustaría serlo?',
    option1: 'Por descubrir la cura del cáncer',
    option2: 'Por inventar el teletransportador',
    option3: 'Por escribir una novela de éxito internacional',
    option4: 'or ser un pintor de reconocimiento mundia'
  }
];
const VocationalTestPage = () => {
  console.log(questions)
  return (

    <>
      < NavBar />
      <div></div>
      <main className="px-6 md:px-20 lg:px-24 pb-3 pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-5 xl:leading-8 font-semibold pt-12 md:mt-0">Vocational Test***</h1>
        <div>
          <p className="mt-10 text-justify">Todos tenemos una disposición natural para trabajar mejor en los campos que más nos
            interesan
            y en los que creemos ser más eficaces. Esta eficacia produce satisfacción, lo que nos impulsa a
            progresar más rapidamente en el desarrollo de nuestras habilidades</p>
          <br />
          <div className=" md:grid grid-cols-2 gap-2">
            {
              questions.map(question => (
                <div className="border-b-2 pb-4  border-slate-200">
                  <p className="py-6 font-bold">{question.description}</p>
                  <input type="radio" id="radio-1" name="radio-options1" />
                  <label for="radio-1" className="hover:text-teal-400" >{question.option1}</label>
                  <br />
                  <input type="radio" id="radio-2" name="radio-options1" />
                  <label for="radio-2" className="hover:text-teal-400">{question.option2}</label>
                  <br />
                  <input type="radio" id="radio-3" name="radio-options1" />
                  <label for="radio-3" className="hover:text-teal-400">{question.option3}</label>
                  <br />
                  <input type="radio" id="radio-4" name="radio-options1" />
                  <label for="radio-4" className="hover:text-teal-400">{question.option4}</label>
                </div>))
            }
          </div>
          <br />
          <br />
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-black hover:bg-green-400 text-white font-bold py-4 px-20 rounded">Finish</button>
        </div>
      </main>
      <footer />
    </>
  )
}


export default VocationalTestPage
