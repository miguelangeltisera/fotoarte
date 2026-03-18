export interface Photographer {
  name: string;
  description: string;
  style: string;
  category: string;
}

export const photographers: Photographer[] = [
  { name: "Alfred Stieglitz", description: "Luchó para que la fotografía fuera considerada un arte.", style: "Pictorialismo, enfoque en la composición y la luz.", category: "Pioneros y Estetas" },
  { name: "Edward Steichen", description: "Clave en la fotografía de moda y curador de The Family of Man.", style: "Elegancia, uso dramático de la luz, versatilidad.", category: "Pioneros y Estetas" },
  { name: "Edward Weston", description: "Maestro del detalle y las formas orgánicas.", style: "Enfoque nítido, texturas, formas abstractas.", category: "Pioneros y Estetas" },
  { name: "Ansel Adams", description: "Rey del paisaje y creador del Sistema de Zonas.", style: "Blanco y negro perfecto, gran rango tonal, precisión técnica.", category: "Pioneros y Estetas" },
  { name: "Henri Cartier-Bresson", description: "Padre del fotoperiodismo moderno.", style: "El instante decisivo, composición geométrica, espontaneidad.", category: "El Instante Decisivo y la Calle" },
  { name: "Robert Frank", description: "Cambió la estética pulcra por una visión más cruda.", style: "Estética cruda, desenfoque, honestidad documental.", category: "El Instante Decisivo y la Calle" },
  { name: "Garry Winogrand", description: "Buscador incansable de la vida en las calles de Nueva York.", style: "Energía del caos, encuadres inclinados, vida urbana.", category: "El Instante Decisivo y la Calle" },
  { name: "Brassaï", description: "El ojo de París, capturó la magia nocturna.", style: "Atmósfera nocturna, niebla, personajes de los bajos fondos.", category: "El Instante Decisivo y la Calle" },
  { name: "Robert Capa", description: "Fotógrafo de guerra por excelencia.", style: "Acción directa, cercanía, urgencia, realismo.", category: "Documental y Guerra" },
  { name: "Dorothea Lange", description: "Rostro humano de la Gran Depresión.", style: "Empatía, retrato documental, composición clásica.", category: "Documental y Guerra" },
  { name: "Walker Evans", description: "Documentó la realidad rural de EE. UU.", style: "Claridad, objetividad clínica, enfoque directo.", category: "Documental y Guerra" },
  { name: "W. Eugene Smith", description: "Maestro del ensayo fotográfico.", style: "Profundidad emocional, narrativa visual, blanco y negro intenso.", category: "Documental y Guerra" },
  { name: "Sebastião Salgado", description: "Imágenes épicas sobre el trabajo manual y la naturaleza.", style: "Gran escala, texturas, blanco y negro dramático.", category: "Documental y Guerra" },
  { name: "Richard Avedon", description: "Retratos minimalistas que revelan el alma.", style: "Fondo blanco, enfoque en la expresión, movimiento.", category: "Retrato, Moda y Surrealismo" },
  { name: "Irving Penn", description: "Elegancia pura, bodegones y retratos.", style: "Composición impecable, fondo gris, iluminación controlada.", category: "Retrato, Moda y Surrealismo" },
  { name: "Diane Arbus", description: "Belleza y humanidad en lo marginal.", style: "Retrato directo, mirada frontal, enfoque en lo inusual.", category: "Retrato, Moda y Surrealismo" },
  { name: "Man Ray", description: "Surrealista que rompió las reglas de la técnica.", style: "Rayogramas, solarizaciones, experimentación técnica.", category: "Retrato, Moda y Surrealismo" },
  { name: "Helmut Newton", description: "Estilo provocador, erótico y poder femenino.", style: "Provocación, moda de alto impacto, iluminación dramática.", category: "Retrato, Moda y Surrealismo" },
  { name: "William Eggleston", description: "Convenció al mundo de que el color podía ser serio.", style: "Color saturado, enfoque en lo cotidiano, luz natural.", category: "La Revolución del Color" },
  { name: "Stephen Shore", description: "Precisión cromática en lo banal.", style: "Precisión, composición estructurada, color impecable.", category: "La Revolución del Color" }
];
