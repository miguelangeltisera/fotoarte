export interface Photographer {
  name: string;
  description: string;
  style: string;
  category: string;
  quote: string;
  expertCommentary: string;
}

export const photographers: Photographer[] = [
  { 
    name: "Alfred Stieglitz", 
    description: "Luchó para que la fotografía fuera considerada un arte.", 
    style: "Pictorialismo, enfoque en la composición y la luz.", 
    category: "Pioneros y Estetas",
    quote: "I wanted to photograph the truth, not the fact.",
    expertCommentary: "Stieglitz no solo capturaba imágenes; esculpía la luz para elevar la fotografía al estatus de bellas artes, desafiando la frialdad mecánica de la cámara."
  },
  { 
    name: "Edward Steichen", 
    description: "Clave en la fotografía de moda y curador de The Family of Man.", 
    style: "Elegancia, uso dramático de la luz, versatilidad.", 
    category: "Pioneros y Estetas",
    quote: "A portrait is not a likeness. The moment an emotion or fact is transformed into a photograph it is no longer a fact but an art.",
    expertCommentary: "Steichen poseía una capacidad camaleónica para transitar entre el pictorialismo romántico y el modernismo comercial, definiendo la estética visual del siglo XX."
  },
  { 
    name: "Edward Weston", 
    description: "Maestro del detalle y las formas orgánicas.", 
    style: "Enfoque nítido, texturas, formas abstractas.", 
    category: "Pioneros y Estetas",
    quote: "The camera should be used for a recording of life, for rendering the very substance and quintessence of the thing itself.",
    expertCommentary: "Weston nos enseñó a mirar lo cotidiano —un pimiento, una concha— y ver en ellos una arquitectura universal, una pureza de forma que trasciende el objeto."
  },
  { 
    name: "Ansel Adams", 
    description: "Rey del paisaje y creador del Sistema de Zonas.", 
    style: "Blanco y negro perfecto, gran rango tonal, precisión técnica.", 
    category: "Pioneros y Estetas",
    quote: "You don't take a photograph, you make it.",
    expertCommentary: "Adams no documentaba la naturaleza; la interpretaba a través de una rigurosa ingeniería tonal, convirtiendo la montaña en una sinfonía de grises."
  },
  { 
    name: "Henri Cartier-Bresson", 
    description: "Padre del fotoperiodismo moderno.", 
    style: "El instante decisivo, composición geométrica, espontaneidad.", 
    category: "El Instante Decisivo y la Calle",
    quote: "To photograph is to hold one's breath, when all faculties converge to capture fleeting reality.",
    expertCommentary: "El ojo de Cartier-Bresson era un sismógrafo de la realidad; su 'instante decisivo' es el equilibrio perfecto entre la geometría del caos y la intuición humana."
  },
  { 
    name: "Robert Frank", 
    description: "Cambió la estética pulcra por una visión más cruda.", 
    style: "Estética cruda, desenfoque, honestidad documental.", 
    category: "El Instante Decisivo y la Calle",
    quote: "The eye must learn to listen before it looks.",
    expertCommentary: "Con 'The Americans', Frank rompió el espejo de la complacencia americana, revelando una soledad y una melancolía que la fotografía comercial prefería ignorar."
  },
  { 
    name: "Garry Winogrand", 
    description: "Buscador incansable de la vida en las calles de Nueva York.", 
    style: "Energía del caos, encuadres inclinados, vida urbana.", 
    category: "El Instante Decisivo y la Calle",
    quote: "I photograph to see what the world looks like in photographs.",
    expertCommentary: "Winogrand no buscaba el orden; abrazaba el desorden frenético de la calle, demostrando que la fotografía es un acto de descubrimiento, no de construcción."
  },
  { 
    name: "Brassaï", 
    description: "El ojo de París, capturó la magia nocturna.", 
    style: "Atmósfera nocturna, niebla, personajes de los bajos fondos.", 
    category: "El Instante Decisivo y la Calle",
    quote: "I wanted to capture Paris by night, the Paris of the shadows.",
    expertCommentary: "Brassaï transformó la noche parisina en un escenario teatral, donde la niebla y la luz artificial revelan la verdadera alma de la ciudad, alejada de la luz del día."
  },
  { 
    name: "Robert Capa", 
    description: "Fotógrafo de guerra por excelencia.", 
    style: "Acción directa, cercanía, urgencia, realismo.", 
    category: "Documental y Guerra",
    quote: "If your pictures aren't good enough, you aren't close enough.",
    expertCommentary: "Capa no solo documentaba la guerra; la vivía. Sus imágenes son un testimonio visceral de la condición humana bajo el fuego, donde la técnica se somete a la urgencia del momento."
  },
  { 
    name: "Dorothea Lange", 
    description: "Rostro humano de la Gran Depresión.", 
    style: "Empatía, retrato documental, composición clásica.", 
    category: "Documental y Guerra",
    quote: "The camera is an instrument that teaches people how to see without a camera.",
    expertCommentary: "Lange utilizó la cámara como un puente de empatía, convirtiendo el sufrimiento individual en un símbolo universal de la dignidad humana ante la adversidad."
  },
  { 
    name: "Walker Evans", 
    description: "Documentó la realidad rural de EE. UU.", 
    style: "Claridad, objetividad clínica, enfoque directo.", 
    category: "Documental y Guerra",
    quote: "Stare. It is the way to educate your eye, and more. Stare, pry, listen, eavesdrop. Die knowing something. You are not here long.",
    expertCommentary: "Evans eliminó la retórica de la imagen documental. Su mirada clínica, casi arqueológica, nos obliga a confrontar la realidad sin adornos ni sentimentalismos."
  },
  { 
    name: "W. Eugene Smith", 
    description: "Maestro del ensayo fotográfico.", 
    style: "Profundidad emocional, narrativa visual, blanco y negro intenso.", 
    category: "Documental y Guerra",
    quote: "Photography is a small voice, at best, but sometimes one photograph, or a group of them, can lure our sense of awareness.",
    expertCommentary: "Smith trataba cada ensayo fotográfico como una cruzada moral. Sus contrastes profundos no eran solo estéticos, sino una representación de la lucha entre la luz y la oscuridad."
  },
  { 
    name: "Sebastião Salgado", 
    description: "Imágenes épicas sobre el trabajo manual y la naturaleza.", 
    style: "Gran escala, texturas, blanco y negro dramático.", 
    category: "Documental y Guerra",
    quote: "I want to show the world as it is, but also as it could be.",
    expertCommentary: "Salgado eleva el trabajo humano a una escala mítica. Sus composiciones, ricas en texturas y contrastes, nos recuerdan nuestra conexión ineludible con la tierra y el esfuerzo."
  },
  { 
    name: "Richard Avedon", 
    description: "Retratos minimalistas que revelan el alma.", 
    style: "Fondo blanco, enfoque en la expresión, movimiento.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "A portrait is not a likeness. The moment an emotion or fact is transformed into a photograph it is no longer a fact but an art.",
    expertCommentary: "Avedon desnudaba a sus sujetos frente a un fondo blanco, eliminando cualquier distracción para capturar la vulnerabilidad o la arrogancia que habitaba tras la máscara social."
  },
  { 
    name: "Irving Penn", 
    description: "Elegancia pura, bodegones y retratos.", 
    style: "Composición impecable, fondo gris, iluminación controlada.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "A good photograph is one that communicate a fact, touches the heart and leaves the viewer a changed person for having seen it.",
    expertCommentary: "Penn encontraba la esencia de la belleza en la simplicidad. Su control absoluto de la luz y el espacio convertía lo efímero de la moda en algo atemporal y escultórico."
  },
  { 
    name: "Diane Arbus", 
    description: "Belleza y humanidad en lo marginal.", 
    style: "Retrato directo, mirada frontal, enfoque en lo inusual.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "A photograph is a secret about a secret. The more it tells you the less you know.",
    expertCommentary: "Arbus no fotografiaba 'monstruos'; fotografiaba la extrañeza que reside en todos nosotros. Su mirada frontal nos desafía a reconocer nuestra propia otredad."
  },
  { 
    name: "Man Ray", 
    description: "Surrealista que rompió las reglas de la técnica.", 
    style: "Rayogramas, solarizaciones, experimentación técnica.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "I do not photograph nature. I photograph my visions.",
    expertCommentary: "Man Ray liberó a la fotografía de su deber de representar la realidad. Sus experimentos técnicos convirtieron la cámara en un pincel para el subconsciente."
  },
  { 
    name: "Helmut Newton", 
    description: "Estilo provocador, erótico y poder femenino.", 
    style: "Provocación, moda de alto impacto, iluminación dramática.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "I don't like good taste. It's synonymous with everything that's boring.",
    expertCommentary: "Newton desafió las convenciones de la moda con una mirada audaz y erótica, donde la mujer no era un objeto, sino un sujeto poderoso, a menudo peligroso."
  },
  { 
    name: "William Eggleston", 
    description: "Convenció al mundo de que el color podía ser serio.", 
    style: "Color saturado, enfoque en lo cotidiano, luz natural.", 
    category: "La Revolución del Color",
    quote: "I am at war with the obvious.",
    expertCommentary: "Eggleston democratizó el color. Al encontrar una belleza sublime en un triciclo o una bombilla, nos demostró que la estética no reside en el sujeto, sino en la mirada."
  },
  { 
    name: "Stephen Shore", 
    description: "Precisión cromática en lo banal.", 
    style: "Precisión, composición estructurada, color impecable.", 
    category: "La Revolución del Color",
    quote: "I want to take a picture of something that is so banal that it is interesting.",
    expertCommentary: "Shore aplicó una estructura casi arquitectónica a la banalidad americana. Sus fotografías en color son meditaciones sobre el tiempo, el espacio y la cultura de consumo."
  }
];
