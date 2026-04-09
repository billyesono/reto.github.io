let players = [];

const retosHotBase = [
    // --- CONTACTO Y BESOS ---
    "Dale un beso francés de 20 segundos a [TARGET].",
    "Pasa tu lengua por el cuello de [TARGET] desde la clavícula hasta la oreja.",
    "Besa apasionadamente a [TARGET] en los labios por 30 segundos.",
    "Muerde suavemente el labio inferior de [TARGET] y tira un poco.",
    "Dale un beso a [TARGET] en la parte interna del muslo, lo más arriba posible.",
    "Lame la oreja de [TARGET] por dentro y por fuera.",
    "Besa el ombligo de [TARGET] y baja 5 centímetros con la lengua.",
    "Dale un beso de 10 segundos a [TARGET] en el lugar que esa persona elija.",
    "Succiónale el cuello a [TARGET] hasta dejarle un chupetón visible.",
    "Pasa un hielo por los labios de [TARGET] y luego dale un beso intenso.",
    "Besa el pecho o escote de [TARGET] durante 15 segundos.",
    "Lame el pezón de [TARGET] por encima de la ropa.",
    "Dale un beso 'esquimal' a [TARGET] que termine en un beso francés robado.",
    "Muerde suavemente el hombro de [TARGET] mientras le susurras algo sucio.",
    "Besa a [TARGET] y a la persona a tu izquierda al mismo tiempo (beso de 3).",
    "Lame los labios de [TARGET] lentamente sin llegar a besarlo/a.",
    "Besa a [TARGET] en la nuca mientras le abrazas por la espalda.",
    "Dale un beso de 5 segundos a [TARGET] en cada mejilla del trasero (con ropa).",
    "Chupa el dedo índice de [TARGET] como si fuera un helado.",
    "Lame una línea desde el ombligo de [TARGET] hasta su barbilla.",

    // --- ROPA Y DESNUDEZ ---
    "Quítate dos prendas de ropa ahora mismo.",
    "Desabrocha el pantalón o falda de [TARGET] usando solo los dientes.",
    "Quédate en ropa interior por los próximos 5 turnos.",
    "Deja que [TARGET] te meta la mano por debajo de la camiseta por 1 minuto.",
    "Quítate el sujetador/bra (si llevas) por debajo de la camisa y dáselo a [TARGET].",
    "Deja que [TARGET] te baje la ropa interior lo suficiente para ver tu marca de bronceado.",
    "Muestra tu ropa interior a todos por 10 segundos.",
    "Intercambia tu camiseta con [TARGET] ahora mismo.",
    "Deja que [TARGET] te quite una prenda de ropa que tú elijas.",
    "Ponte la ropa interior de [TARGET] por encima de tus pantalones.",
    "Haz un striptease de 30 segundos frente a [TARGET].",
    "Quédate solo con una prenda puesta (la que tú quieras).",
    "Deja que [TARGET] use su mano para explorar por dentro de tu pantalón 20 segundos.",
    "Quítate los calcetines y deja que [TARGET] te chupe los dedos de los pies.",
    "Desabrocha 3 botones de la camisa de [TARGET] con una sola mano.",
    "Lanza una de tus prendas al centro de la habitación y no la recuperes hasta el final.",
    "Deja que el grupo elija qué prenda debe quitarse [TARGET] por ti.",
    "Muestra al grupo la última foto sexy que tengas en tu móvil.",
    "Quédate en ropa interior y deja que [TARGET] te eche un chorro de agua fría.",
    "Describe con detalle la ropa interior que lleva puesta [TARGET] sin mirar.",

    // --- ACCIÓN Y POSICIONES ---
    "Hazle un 'lap dance' (baile sexy) a [TARGET] durante 1 minuto.",
    "Simula tu posición sexual favorita con [TARGET] durante 30 segundos.",
    "Deja que [TARGET] te dé 5 azotes (nalgadas) fuertes.",
    "Ponte en posición de perrito y deja que [TARGET] te monte (con ropa).",
    "Masajea los glúteos de [TARGET] con ambas manos por 1 minuto.",
    "Haz que [TARGET] se siente en tu regazo mientras le susurras tus fantasías.",
    "Lame un poco de chocolate o licor del abdomen de [TARGET].",
    "Ponte encima de [TARGET] y simula un acto sexual moviendo las caderas.",
    "Deja que [TARGET] te 'ate' las manos con su cinturón por 2 turnos.",
    "Tómate un trago (shot) servido directamente desde el cuerpo de [TARGET].",
    "Haz 10 flexiones sobre [TARGET] quedando a pocos milímetros de sus labios.",
    "Mete un hielo en tu boca y pásalo a la boca de [TARGET] sin manos.",
    "Deja que [TARGET] te muerda suavemente cualquier parte del cuerpo.",
    "Haz gemidos de placer reales durante 30 segundos mientras miras a [TARGET].",
    "Deja que [TARGET] te meta un dedo en la boca mientras tú lo succionas.",
    "Realiza un masaje sensual en los muslos de [TARGET].",
    "Pasa tus manos por todo el cuerpo de [TARGET] buscando 'algo oculto'.",
    "Haz que [TARGET] se acueste y tú ponte a horcajadas sobre su pecho.",
    "Deja que [TARGET] te sople aire caliente en la entrepierna (con ropa).",
    "Escribe con tu lengua una palabra en la espalda de [TARGET] y que adivine.",

    // --- CONFESIONES Y OTROS ---
    "Cuéntale al grupo cuál es tu fetiche más extraño.",
    "Describe el lugar más raro donde has tenido relaciones.",
    "Dile a [TARGET] qué parte de su cuerpo te da más ganas de lamer.",
    "Envía un mensaje de texto atrevido a la última persona que buscaste en Instagram.",
    "Confiesa quién de los presentes te atrae más sexualmente.",
    "Describe detalladamente tu último sueño erótico.",
    "Dile a [TARGET] qué posición te gustaría practicar con él/ella.",
    "Haz ruidos de orgasmo cada vez que alguien diga 'Hot' por 10 minutos.",
    "Describe qué es lo que más te calienta de [TARGET].",
    "Pasa 2 minutos encerrado a solas con [TARGET] en una habitación oscura.",
    "Lame el sudor de [TARGET] (si hay) o simplemente lame su cuello.",
    "Deja que [TARGET] te huela la entrepierna por encima de la ropa.",
    "Tócate a ti mismo/a de forma sugerente mirando a [TARGET] por 30 segundos.",
    "Besa a todos los del sexo opuesto en la mejilla muy cerca de la boca.",
    "Deja que [TARGET] use su lengua para recorrer tu columna vertebral.",
    "Posa para una foto 'Hot' con [TARGET] que el grupo debe tomar.",
    "Dile al grupo cuántas personas han pasado por tu cama.",
    "Deja que [TARGET] te dé un beso negro simulado por encima de la ropa.",
    "Quítate la camiseta y deja que [TARGET] te dé un masaje con hielo.",
    "Elige a alguien para que sea tu 'esclavo' el resto del juego.",
    "Lame el pezón de la persona a tu derecha (por encima de la ropa).",
    "Dale un mordisco juguetón a [TARGET] en la nalga.",
    "Deja que [TARGET] te acaricie la entrepierna con el pie por 1 minuto.",
    "Muestra tu mejor 'cara de placer' a la cámara de un móvil.",
    "Lame el dedo de [TARGET] y luego mételo en tu oreja.",
    "Susúrrale a [TARGET] algo que te gustaría que te hiciera ahora mismo.",
    "Deja que [TARGET] te desabroche el bra/sujetador con una sola mano.",
    "Haz que [TARGET] te lama una zona con sirope o bebida.",
    "Quédate en ropa interior y haz 20 sentadillas frente a todos.",
    "Deja que [TARGET] te meta la mano en el bolsillo trasero y apriete.",
    "Besa la zona donde termina la espalda de [TARGET].",
    "Deja que [TARGET] use su lengua para 'limpiar' tus labios.",
    "Simula una masturbación rápida sobre la ropa por 15 segundos.",
    "Deja que [TARGET] te muerda el cuello mientras gimes.",
    "Besa el abdomen de [TARGET] y haz círculos con la lengua.",
    "Describe cómo te gustaría que [TARGET] te quitara la ropa.",
    "Deja que [TARGET] te meta un hielo en la ropa interior.",
    "Besa a la persona que tengas a tu izquierda en la boca.",
    "Haz un baile sexy para todo el grupo.",
    "Lame la mejilla de [TARGET] de forma muy húmeda.",
    "Deja que [TARGET] te toque los pechos/pectoral por 30 segundos.",
    "Dile a [TARGET] un secreto sexual que nadie sepa.",
    "Besa a [TARGET] en la comisura de los labios por 10 segundos.",
    "Deja que [TARGET] te quite el cinturón con los dientes.",
    "Haz que [TARGET] te dé un beso de lengua profundo.",
    "Quédate solo con la ropa interior el resto de la partida.",
    "Lame el cuello de [TARGET] y sopla suavemente.",
    "Deja que [TARGET] te haga un 'hickey' (chupetón) donde quiera.",
    "Besa a [TARGET] en el interior de la muñeca.",
    "Termina el juego quitándote una prenda adicional."
];

const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const playerInput = document.getElementById('player-name');
const addPlayerBtn = document.getElementById('add-player-btn');
const playerList = document.getElementById('player-list');
const startGameBtn = document.getElementById('start-game-btn');
const currentPlayerDisplay = document.getElementById('current-player');
const challengeText = document.getElementById('challenge-text');
const nextTurnBtn = document.getElementById('next-turn-btn');
const backBtn = document.getElementById('back-to-setup');

// Función para añadir jugadores
addPlayerBtn.onclick = () => {
    const name = playerInput.value.trim();
    if (name) {
        players.push(name);
        updatePlayerList();
        playerInput.value = '';
        playerInput.focus();
        startGameBtn.disabled = players.length < 2;
    }
};

function updatePlayerList() {
    playerList.innerHTML = players.map((p, i) => `
        <li class="player-tag">${p} <span onclick="removePlayer(${i})">✕</span></li>
    `).join('');
}

window.removePlayer = (i) => {
    players.splice(i, 1);
    updatePlayerList();
    startGameBtn.disabled = players.length < 2;
};

// Iniciar Juego
startGameBtn.onclick = () => {
    setupScreen.classList.remove('active');
    gameScreen.classList.add('active');
    nextTurn();
};

function nextTurn() {
    const curPlayer = players[Math.floor(Math.random() * players.length)];
    let others = players.filter(p => p !== curPlayer);
    const target = others[Math.floor(Math.random() * others.length)];
    
    const raw = retosHotBase[Math.floor(Math.random() * retosHotBase.length)];
    const final = raw.replace("[TARGET]", `<strong>${target}</strong>`);

    currentPlayerDisplay.textContent = curPlayer;
    challengeText.innerHTML = final;
}

nextTurnBtn.onclick = nextTurn;
backBtn.onclick = () => {
    gameScreen.classList.remove('active');
    setupScreen.classList.add('active');
};
