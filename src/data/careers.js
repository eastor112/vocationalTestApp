const careersData = [
  {
    id: 1,
    name: 'Architecture',
    description: 'An architect is the professional who is in charge of projecting, designing, directing the construction and maintenance of buildings, urbanizations, cities and structures of various kinds.',
    field: {
      description:
        'An architect can practice his profession in both the public and private sectors. He can also practice in independent offices. Here are some of the alternatives that an architect has to work with. An architect can work independently, establishing his own office.',
      list: [
        'Private architecture and urban planning offices.',
        'Real estate and construction companies.',
        'Architectural design offices.',
        'Departments of architecture in public organizations.',
        'Research centers in urban planning',
        'Consultants in the area of sustainability',
        'Universities',
      ],
      references: ['https://crgs.udem.edu.mx/arte-arquitectura-y-diseno/academia/profesional/licenciatura-en-arquitectura'],
    },
    skills: {
      description:
        'Being an architect means having a highly qualified profile, both technically and artistically. Architecture is a very interesting and complex discipline, since to understand it perfectly, one must have a magical gift that we could call spatial vision. It would be very difficult to pass the Architecture degree without mastering technical drawing and without visualizing how what we imagine in our minds would look like in reality.',
      list: [
        'Ability for manual work.',
        'Ease of freehand drawing.',
        'Basic knowledge of physics and mathematics.',
        'Capacity for analysis, synthesis and observation.',
        'Interest in the humanities (art, culture or sociology).',
        'Master organization and order.',
      ],
      references: ['https://www.uax.com/blog/arquitectura/requisitos-para-estudiar-arquitectura'],
    },
    photo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
  }, {
    id: 2,
    name: 'Medicine',
    description: "A physician is a professional who practices medicine and who attempts to maintain and restore health by studying, diagnosing, and treating a patient's illness or injury.",
    field: {
      description:
        'The field of work of a doctor depends mainly on whether or not he has a specialty, in the case of those who are general practitioners, they usually work in their own offices or in hospitals, mainly attending general cases and determining the type of specialist they require. The labor field of the graduate of this Career extends within the health sector, as part of public or private institutions.',
      list: [
        'In a private clinic.',
        'Inside a public health center',
        'As a private doctor',
        'In medical research centers.',
      ],
      references: [
        'https://www.educaedu.com.mx/carrera-de-medicina-carreras-universitarias-25758.html',
        'https://estudiaperu.pe/carrera-pregrado/medicina/',
      ],
    },
    skills: {
      description:
        'To become a great doctor you must make an effort to study, learn more about this science of health through books and learn from the experience of your professors, who will be your best guides at the university and at the hospital.',
      list: [
        'Community concern',
        'Sociability and empathy',
        'love of reading',
        'Emotional maturity',
        'Interest in research',
        'Ability to work under pressure',
      ],
      references: [
        'http://www.tuproyectodevida.pe/blog/quieres-ser-medico-diez-cualidades-que-debes-tener/',
        'https://www.learnchile.cl/que-aptitudes-debo-tener-si-pienso-en-estudiar-medicina/',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  }, {
    id: 3,
    name: 'Law',
    description: 'The lawyer is the professional who exercises legal defense in a trial, as well as the judicial and administrative processes caused or suffered by it. In addition, he advises and gives advice on legal matters.',
    field: {
      description:
        'The lawyer is a professional who allows you to advise, guide and represent people in legal matters. A lawyer will always be required in a society where defending the rights and interests of others is a necessity.',
      list: [
        'Power of attorney.',
        'Public ministry.',
        'Constitutional Court.',
        'Regulatory bodies.',
        'Ministries and public bodies of the central government.',
        'Arbitration and conciliation centers.',
        'Legal studies',
        'Notarial and registry activities',
        'National and international financial entities',
        'University research and teaching activities',
      ],
      references: [
        'http://www.unfv.edu.pe/facultades/fdcp/escuela-profesional-de-derecho/campo-laboral#:~:text=Actividades%20notariales%20y%20registrales,de%20investigaci%C3%B3n%20y%20docencia%20universitaria',
        'https://unea.edu.mx/blog/index.php/campo-laboral-abogados/',
      ],
    },
    skills: {
      description: 'In addition to the interest in studying Law, which implies having a certain inclination towards law and justice, it is necessary to have certain skills to perform successfully within the profession.',
      list: [
        'Taste for reading',
        'Interest in law',
        'Oral and written expression',
        'Analysis capacity',
        'Bargaining power',
        'Capacity for conflict resolution',
        'Interest in the pursuit of justice and social welfare',
      ],
      references: [
        'https://mexico.justia.com/recursos/escuelas/preguntas-y-respuestas-para-estudiar-derecho-y-ser-abogado-en-mexico/',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  }, {
    id: 4,
    name: 'Geography',
    description: "A geographer is a scientist and researcher who studies the earth's surface, both in its physical composition and in the activities and human interrelationships that occur in it. They study the surface of the Earth (geosphere) according to its spatial structures, the processes that take place and their functions (interactions between geofactors).",
    field: {
      description: 'The Geographer is a professional with knowledge, skills and abilities to develop professional activities of design, advice, coordination, execution and evaluation of land use plans, development and environmental planning, at local, regional, national and international scales.',
      list: [
        'Environmental analysis',
        'Environmental impact studies',
        'Tourism planning and management',
        'Urban and regional planning',
        'Weather forecasting and analysis',
        'local development agents',
        'Manager of protected spaces',
        'Secondary, professional and superior teacher',
        'Market studies and spatial economic analysis',
      ],
      references: [
        'http://ffyl1.uncu.edu.ar/spip.php?rubrique84',
        'https://estudiaperu.pe/carrera-pregrado/geografia/',
        'https://www.buscouniversidad.com.ar/orientacion/por-que-estudiar-la-carrera-de-geografia/#De_que_puedo_trabajar_como_egresado_de_la_Carrera_de_Geografia',
      ],
    },
    skills: {
      description: 'Geographers are often interested in the areas of construction, thought, and creation. The building interest area indicates a focus on working with tools and machines, and making or fixing practical things. The Thinking Interest Area indicates a focus on investigating, investigating, and increasing understanding of natural laws. The Creation interest area indicates a focus on being original and imaginative, and working with artistic media.',
      list: [
        'Analysis capacity.',
        'Communication skills.',
        'Computer skills.',
        'Critical thinking skills.',
        'Writting skills.',
      ],
      references: [
        'https://campolaboral.net/geografo-sueldo-anual-campo-laboral-proyecciones-de-trabajo-y-mas/',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  }, {
    id: 5,
    name: 'Social work',
    description: "Social work is a profession that promotes social change and development, social cohesion and the empowerment of people. Social work engages people and structures to deal with life's challenges and increase well-being.",
    field: {
      description: 'Social work implies entering a world where empathy and the passion to help must be dominant forces. The main function of a social worker is to promote social change and generate projects that increase the well-being and quality of life of people. Almost all companies and institutions have a professional of this type on their team, since social matters are key everywhere.',
      list: [
        'Social worker in public entities.',
        'In Human Resources.',
        'In hospitals and health centers.',
        'As a social monitor, director in residence and shelter homes.',
        'Social manager in charitable foundations.',
      ],
      references: [
        'https://www.carrerasadistancia.com.pe/licenciatura-en-trabajo-social/articulo-trabajo-social-campo-laboral#:~:text=La%20principal%20funci%C3%B3n%20de%20un,es%20clave%20en%20todas%20partes.',
      ],
    },
    skills: {
      description: 'The social worker must have the ability to work and assess their needs and circumstances together with individuals, families, groups, organizations and communities.',
      list: [
        'Positive attitude.',
        'Listening skills.',
        'Skills to negotiate.',
        'Report writing skills.',
        'Ability to gain the trust of others.',
        'Ability to manage workload.',
        'Able to remain calm under pressure.',
        'Effective communication',
      ],
      references: [
        'https://www.educaweb.com/profesion/trabajador-social-239/',
        'http://www.trabajosocialvalladolidsegovia.org/perfilprofesional.php',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  }, {
    id: 6,
    name: 'Visual Arts',
    description: 'The visual artist performs art forms such as painting, drawing, printmaking, photography, video, film, design, crafts, and architecture.',
    field: {
      description: 'The visual artist can work as an advertising specialist, marketing director, CAD designer, product designer, and more. They can also work in the movie industry, develop video games, or create brand images for a company. Social media is another growing area where visual artists can create content.',
      list: [
        'Graphic Designer',
        'Art Consultant',
        'Illustrator',
        'Art Editor',
        'Art Gallery Director',
        'Cartoonist',
        'Cinematographer',
        'Fashion Designer',
        'Furniture Designer',
      ],
      references: [
        'https://www.ziprecruiter.com/Career/Visual-Artist/What-Is-How-to-Become',
      ],
    },
    skills: {
      description: "The artist's job is to immerse viewers in a world they have built and guide them safely through it, in order to communicate ideas and feelings.",
      list: [
        'Being creative',
        'Painting skills',
        'Communicating',
        'Managing information and thinking',
        'Composition skills',
      ],
      references: [
        'https://drawingacademy.com/12-most-essential-skills-every-fine-artist-must-have',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80',
  }, {
    id: 7,
    name: 'Philosophy',
    description: 'The philosophy is a branch of philosophy that deals with the nature of knowledge and the relationship between knowledge and truth.',
    field: {
      description: "The philosopher's task is to search for the elements that support the understanding of the human being and his environment. The philosopher transmits the fundamental values of culture, and performs a constant and systematic reflection of reality. A philosopher usually works in the academic field.",
      list: [
        'Teaching at the upper secondary and higher levels.',
        'engage in philosophical research.',
        'Interpretation of writings.',
      ],
      references: [
        'https://futurosposibles.mx/2019/09/en-que-puedo-trabajar-si-estudio-filosofia/#:~:text=Un%20fil%C3%B3sofo%20puede%20trabajar%20en,profundizar%20distintas%20%C3%A1reas%20de%20conocimiento.',
        'http://oferta.unam.mx/filosofia.html',
      ],
    },
    skills: {
      description: 'To study philosophy you must have the ability to abstract and conceptualize ideas. Have the ability to reflect and be a critical person. Have an interest in the themes of history and be oriented towards research.',
      list: [
        'Capacity for analysis and synthesis.',
        'Reading habits.',
        'reflective and discursive capacity.',
        'argumentative ability.',
        'Critical spirit.',
        'Mastery of oral and written language.',
        'Clear and rigorous thinking.',
      ],
      references: [
        'https://www.formacionimpulsat.com/informacion/estudiar-la-carrera-de-filosofia/#:~:text=Tener%20capacidad%20de%20abstracci%C3%B3n%20y,artes%20y%20en%20las%20ciencias.',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1502700807168-484a3e7889d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
  }, {
    id: 8,
    name: 'Literature',
    description: 'These professionals produce different forms of literary art and creative writing such as novels, short stories, books, poetry, plays, screenplays, songs, and essays, as well as other reports and news articles that may be of interest to the public.',
    field: {
      description: 'A professional in Literature and Linguistics can work in publishing companies, educational centers of all levels, research centers, cultural organizations, among others.',
      list: [
        'Teaching and research.',
        'Editorials.',
        'Freelance writer.',
        'Cultural organizations.',
        'Media',
      ],
      references: [
        'https://orientacion.universia.edu.pe/infodetail/orientacion/orientacion_vocacional/en-que-trabaja-un-profesional-de-literatura-y-linguistica-4807.html#:~:text=Campo%20laboral%20del%20profesional%20en,%2C%20organizaciones%20culturales%2C%20entre%20otros.',
      ],
    },
    skills: {
      description: 'If you are a person who is passionate about reading and writing, has skills for creating texts, and has reflective thinking about the historical-social context, then you should study Literature.',
      list: [
        'Passion for reading.',
        'Creativity.',
        'Retailer.',
        'Communication.',
        'Drafting.',
        'Analytical thinking.',
      ],
      references: [
        'https://universidadesyprofesiones.com/profesiones/literatura',
      ],
    },
    photo: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
];

export default careersData;
