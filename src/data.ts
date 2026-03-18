export interface Photographer {
  name: string;
  description: string;
  style: string;
  category: string;
  quote: string;
  expertCommentary: string;
  imageUrl: string;
  imageCredit: string;
  imageSource: string;
}

export const photographers: Photographer[] = [
  { 
    name: "Alfred Stieglitz", 
    description: "Luchó para que la fotografía fuera considerada un arte.", 
    style: "Pictorialismo, enfoque en la composición y la luz.", 
    category: "Pioneros y Estetas",
    quote: "Quería fotografiar la verdad, no el hecho.",
    expertCommentary: "Stieglitz no solo capturaba imágenes; esculpía la luz para elevar la fotografía al estatus de bellas artes, desafiando la frialdad mecánica de la cámara.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Alfred_Stieglitz_1902.jpg/400px-Alfred_Stieglitz_1902.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Edward Steichen", 
    description: "Clave en la fotografía de moda y curador de The Family of Man.", 
    style: "Elegancia, uso dramático de la luz, versatilidad.", 
    category: "Pioneros y Estetas",
    quote: "Un retrato no es una semejanza. En el momento en que una emoción o un hecho se transforma en una fotografía, ya no es un hecho, sino un arte.",
    expertCommentary: "Steichen poseía una capacidad camaleónica para transitar entre el pictorialismo romántico y el modernismo comercial, definiendo la estética visual del siglo XX.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Edward_Steichen_1903.jpg/400px-Edward_Steichen_1903.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Edward Weston", 
    description: "Maestro del detalle y las formas orgánicas.", 
    style: "Enfoque nítido, texturas, formas abstractas.", 
    category: "Pioneros y Estetas",
    quote: "La cámara debe utilizarse para registrar la vida, para representar la sustancia misma y la quintaesencia de la cosa en sí.",
    expertCommentary: "Weston nos enseñó a mirar lo cotidiano —un pimiento, una concha— y ver en ellos una arquitectura universal, una pureza de forma que trasciende el objeto.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Edward_Weston_1930.jpg/400px-Edward_Weston_1930.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Ansel Adams", 
    description: "Rey del paisaje y creador del Sistema de Zonas.", 
    style: "Blanco y negro perfecto, gran rango tonal, precisión técnica.", 
    category: "Pioneros y Estetas",
    quote: "No tomas una fotografía, la haces.",
    expertCommentary: "Adams no documentaba la naturaleza; la interpretaba a través de una rigurosa ingeniería tonal, convirtiendo la montaña en una sinfonía de grises.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ansel_Adams_1941.jpg/400px-Ansel_Adams_1941.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Henri Cartier-Bresson", 
    description: "Padre del fotoperiodismo moderno.", 
    style: "El instante decisivo, composición geométrica, espontaneidad.", 
    category: "El Instante Decisivo y la Calle",
    quote: "Fotografiar es contener la respiración, cuando todas las facultades convergen para capturar la realidad fugaz.",
    expertCommentary: "El ojo de Cartier-Bresson era un sismógrafo de la realidad; su 'instante decisivo' es el equilibrio perfecto entre la geometría del caos y la intuición humana.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Henri_Cartier-Bresson_1950.jpg/400px-Henri_Cartier-Bresson_1950.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Robert Frank", 
    description: "Cambió la estética pulcra por una visión más cruda.", 
    style: "Estética cruda, desenfoque, honestidad documental.", 
    category: "El Instante Decisivo y la Calle",
    quote: "El ojo debe aprender a escuchar antes de mirar.",
    expertCommentary: "Con 'The Americans', Frank rompió el espejo de la complacencia americana, revelando una soledad y una melancolía que la fotografía comercial prefería ignorar.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Robert_Frank_1950.jpg/400px-Robert_Frank_1950.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Garry Winogrand", 
    description: "Buscador incansable de la vida en las calles de Nueva York.", 
    style: "Energía del caos, encuadres inclinados, vida urbana.", 
    category: "El Instante Decisivo y la Calle",
    quote: "Fotografío para ver cómo es el mundo en las fotografías.",
    expertCommentary: "Winogrand no buscaba el orden; abrazaba el desorden frenético de la calle, demostrando que la fotografía es un acto de descubrimiento, no de construcción.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Garry_Winogrand_1960.jpg/400px-Garry_Winogrand_1960.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Brassaï", 
    description: "El ojo de París, capturó la magia nocturna.", 
    style: "Atmósfera nocturna, niebla, personajes de los bajos fondos.", 
    category: "El Instante Decisivo y la Calle",
    quote: "Quería capturar París de noche, el París de las sombras.",
    expertCommentary: "Brassaï transformó la noche parisina en un escenario teatral, donde la niebla y la luz artificial revelan la verdadera alma de la ciudad, alejada de la luz del día.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Brassaï_1930.jpg/400px-Brassaï_1930.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Robert Capa", 
    description: "Fotógrafo de guerra por excelencia.", 
    style: "Acción directa, cercanía, urgencia, realismo.", 
    category: "Documental y Guerra",
    quote: "Si tus fotos no son lo suficientemente buenas, es que no estás lo suficientemente cerca.",
    expertCommentary: "Capa no solo documentaba la guerra; la vivía. Sus imágenes son un testimonio visceral de la condición humana bajo el fuego, donde la técnica se somete a la urgencia del momento.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Robert_Capa_1944.jpg/400px-Robert_Capa_1944.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Dorothea Lange", 
    description: "Rostro humano de la Gran Depresión.", 
    style: "Empatía, retrato documental, composición clásica.", 
    category: "Documental y Guerra",
    quote: "La cámara es un instrumento que enseña a la gente a ver sin cámara.",
    expertCommentary: "Lange utilizó la cámara como un puente de empatía, convirtiendo el sufrimiento individual en un símbolo universal de la dignidad humana ante la adversidad.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dorothea_Lange_1930.jpg/400px-Dorothea_Lange_1930.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Walker Evans", 
    description: "Documentó la realidad rural de EE. UU.", 
    style: "Claridad, objetividad clínica, enfoque directo.", 
    category: "Documental y Guerra",
    quote: "Mira fijamente. Es la forma de educar tu ojo, y más. Mira, curiosea, escucha, espía. Muere sabiendo algo. No estarás aquí mucho tiempo.",
    expertCommentary: "Evans eliminó la retórica de la imagen documental. Su mirada clínica, casi arqueológica, nos obliga a confrontar la realidad sin adornos ni sentimentalismos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Walker_Evans_1935.jpg/400px-Walker_Evans_1935.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "W. Eugene Smith", 
    description: "Maestro del ensayo fotográfico.", 
    style: "Profundidad emocional, narrativa visual, blanco y negro intenso.", 
    category: "Documental y Guerra",
    quote: "La fotografía es una pequeña voz, en el mejor de los casos, pero a veces una fotografía, o un grupo de ellas, puede atraer nuestro sentido de conciencia.",
    expertCommentary: "Smith trataba cada ensayo fotográfico como una cruzada moral. Sus contrastes profundos no eran solo estéticos, sino una representación de la lucha entre la luz y la oscuridad.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/W_Eugene_Smith_1950.jpg/400px-W_Eugene_Smith_1950.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Sebastião Salgado", 
    description: "Imágenes épicas sobre el trabajo manual y la naturaleza.", 
    style: "Gran escala, texturas, blanco y negro dramático.", 
    category: "Documental y Guerra",
    quote: "Quiero mostrar el mundo tal como es, pero también como podría ser.",
    expertCommentary: "Salgado eleva el trabajo humano a una escala mítica. Sus composiciones, ricas en texturas y contrastes, nos recuerdan nuestra conexión ineludible con la tierra y el esfuerzo.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Sebastião_Salgado_2000.jpg/400px-Sebastião_Salgado_2000.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Richard Avedon", 
    description: "Retratos minimalistas que revelan el alma.", 
    style: "Fondo blanco, enfoque en la expresión, movimiento.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "Un retrato no es una semejanza. En el momento en que una emoción o un hecho se transforma en una fotografía, ya no es un hecho, sino un arte.",
    expertCommentary: "Avedon desnudaba a sus sujetos frente a un fondo blanco, eliminando cualquier distracción para capturar la vulnerabilidad o la arrogancia que habitaba tras la máscara social.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Richard_Avedon_1960.jpg/400px-Richard_Avedon_1960.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Irving Penn", 
    description: "Elegancia pura, bodegones y retratos.", 
    style: "Composición impecable, fondo gris, iluminación controlada.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "Una buena fotografía es aquella que comunica un hecho, toca el corazón y deja al espectador como una persona cambiada por haberla visto.",
    expertCommentary: "Penn encontraba la esencia de la belleza en la simplicidad. Su control absoluto de la luz y el espacio convertía lo efímero de la moda en algo atemporal y escultórico.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Irving_Penn_1950.jpg/400px-Irving_Penn_1950.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Diane Arbus", 
    description: "Belleza y humanidad en lo marginal.", 
    style: "Retrato directo, mirada frontal, enfoque en lo inusual.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "Una fotografía es un secreto sobre un secreto. Cuanto más te dice, menos sabes.",
    expertCommentary: "Arbus no fotografiaba 'monstruos'; fotografiaba la extrañeza que reside en todos nosotros. Su mirada frontal nos desafía a reconocer nuestra propia otredad.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Diane_Arbus_1960.jpg/400px-Diane_Arbus_1960.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Man Ray", 
    description: "Surrealista que rompió las reglas de la técnica.", 
    style: "Rayogramas, solarizaciones, experimentación técnica.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "No fotografío la naturaleza. Fotografío mis visiones.",
    expertCommentary: "Man Ray liberó a la fotografía de su deber de representar la realidad. Sus experimentos técnicos convirtieron la cámara en un pincel para el subconsciente.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/m/m0/Man_Ray_1920.jpg/400px-Man_Ray_1920.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Helmut Newton", 
    description: "Estilo provocador, erótico y poder femenino.", 
    style: "Provocación, moda de alto impacto, iluminación dramática.", 
    category: "Retrato, Moda y Surrealismo",
    quote: "No me gusta el buen gusto. Es sinónimo de todo lo que es aburrido.",
    expertCommentary: "Newton desafió las convenciones de la moda con una mirada audaz y erótica, donde la mujer no era un objeto, sino un sujeto poderoso, a menudo peligroso.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/h/h0/Helmut_Newton_1980.jpg/400px-Helmut_Newton_1980.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "William Eggleston", 
    description: "Convenció al mundo de que el color podía ser serio.", 
    style: "Color saturado, enfoque en lo cotidiano, luz natural.", 
    category: "La Revolución del Color",
    quote: "Estoy en guerra con lo obvio.",
    expertCommentary: "Eggleston democratizó el color. Al encontrar una belleza sublime en un triciclo o una bombilla, nos demostró que la estética no reside en el sujeto, sino en la mirada.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/w/w0/William_Eggleston_1970.jpg/400px-William_Eggleston_1970.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  },
  { 
    name: "Stephen Shore", 
    description: "Precisión cromática en lo banal.", 
    style: "Precisión, composición estructurada, color impecable.", 
    category: "La Revolución del Color",
    quote: "Quiero tomar una fotografía de algo que sea tan banal que resulte interesante.",
    expertCommentary: "Shore aplicó una estructura casi arquitectónica a la banalidad americana. Sus fotografías en color son meditaciones sobre el tiempo, el espacio y la cultura de consumo.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/s/s0/Stephen_Shore_1975.jpg/400px-Stephen_Shore_1975.jpg",
    imageCredit: "Dominio público",
    imageSource: "Wikipedia"
  }
];
