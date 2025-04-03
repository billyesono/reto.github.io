document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const playerInput = document.getElementById('playerInput');
    const addPlayerBtn = document.getElementById('addPlayerBtn');
    const playersList = document.getElementById('playersList');
    const startGameBtn = document.getElementById('startGameBtn');
    const setupPhase = document.getElementById('setupPhase');
    const gamePhase = document.getElementById('gamePhase');
    const currentPlayerSpan = document.getElementById('currentPlayer');
    const bottle = document.getElementById('bottle');
    const spinButton = document.getElementById('spinButton');
    const challengeContainer = document.getElementById('challengeContainer');
    const truthBtn = document.getElementById('truthBtn');
    const dareBtn = document.getElementById('dareBtn');
    const challengeDisplay = document.getElementById('challengeDisplay');
    const challengeType = document.getElementById('challengeType');
    const challengeText = document.getElementById('challengeText');
    const completedBtn = document.getElementById('completedBtn');
    const intensityLevel = document.getElementById('intensityLevel');

    // Game state
    let players = [];
    let currentPlayerIndex = 0;
    let targetPlayerIndex = 0;
    
    // Challenges by intensity level
    const challenges = {
        truth: {
            mild: [
                "¿Cuál es tu fantasía sexual favorita?",
                "¿Cuál es la parte del cuerpo que más te excita?",
                "¿Has tenido alguna vez un sueño erótico con alguien de esta habitación?",
                "¿Cuál ha sido tu experiencia sexual más vergonzosa?",
                "¿Qué es lo más atrevido que has hecho en público?",
                "¿Alguna vez has enviado fotos provocativas?",
                "¿Cuál es tu posición sexual favorita?",
                "¿Qué te excita más durante el sexo?",
                "¿Alguna vez has tenido sexo en un lugar público?",
                "¿Con qué frecuencia te masturbas?",
                "¿Alguna vez te has sentido atraído/a por alguien del mismo sexo?",
                "¿Has besado a alguien del mismo sexo?",
                "¿Has tenido alguna vez un 'amigo con beneficios'?",
                "¿Te excita que te dominen o dominar?",
                "¿Cuál es tu juguete sexual favorito?",
                "¿Alguna vez has fantaseado con alguien de este grupo?",
                "¿Qué famoso/a te gustaría tener en tu cama?",
                "¿Has tenido alguna vez sexo en la primera cita?",
                "¿Qué parte de tu cuerpo es más sensible?",
                "¿Alguna vez has practicado sexting?",
                "¿Prefieres dar o recibir placer oral?",
                "¿Cuál es tu mayor debilidad en la cama?",
                "¿Has tenido alguna vez un orgasmo múltiple?",
                "¿Alguna vez te han pillado masturbándote?",
                "¿Has tenido fantasías con algún profesor/a o jefe/a?",
                "¿Qué edad tenías cuando perdiste la virginidad?",
                "¿Te excita ver a otras personas teniendo sexo?",
                "¿Alguna vez has tenido una experiencia homosexual?",
                "¿Cuál es el lugar más extraño donde has tenido relaciones?",
                "¿Qué es lo que más te excita en una persona?"
            ],
            medium: [
                "Describe detalladamente tu última experiencia sexual",
                "¿Qué es lo más sucio que alguien te ha dicho durante el sexo?",
                "¿Alguna vez has fingido un orgasmo? ¿Por qué?",
                "¿Has usado juguetes sexuales? ¿Cuáles?",
                "¿Qué fetiches tienes que no has confesado?",
                "¿Qué zona erógena es la que más te gusta que te estimulen?",
                "¿Alguna vez has tenido un encuentro sexual con más de una persona a la vez?",
                "¿Qué te gustaría experimentar que nunca has hecho?",
                "¿Alguna vez has sido infiel? Cuenta los detalles",
                "¿Has tenido alguna vez pensamientos sexuales sobre alguien del mismo sexo?",
                "¿Cuál es la cosa más sucia que te gustaría que te dijeran durante el sexo?",
                "¿Te gusta el sexo anal? ¿Por qué sí o por qué no?",
                "Describe tu experiencia más intensa de sexo oral",
                "¿Alguna vez has usado juguetes anales?",
                "¿Cómo te gusta que sea el vello púbico de tu pareja?",
                "¿Qué es lo más extraño que te ha excitado?",
                "¿Te ha atraído alguna vez alguien mucho mayor o mucho menor que tú?",
                "¿Has tenido alguna vez una relación abierta?",
                "¿Cuál es tu mejor técnica de seducción?",
                "¿Cuál es la cosa más obscena que has buscado en internet?",
                "¿Has fantaseado alguna vez con tener sexo con un desconocido?",
                "¿Te gusta ser espontáneo o planificar tus encuentros sexuales?",
                "¿Cuál es tu mayor inseguridad en la cama?",
                "¿Qué te excita más: ¿ver o ser visto/a?",
                "¿Has utilizado alguna vez la comida durante el sexo?",
                "¿Cuál ha sido tu mayor atrevimiento sexual?",
                "¿Alguna vez te has vestido para excitar a tu pareja?",
                "¿Has tenido alguna experiencia con consoladores o vibradores?",
                "¿Qué piensas de los tríos?",
                "¿Alguna vez has tenido sentimientos por alguien con quien solo mantenías una relación sexual?"
            ],
            hot: [
                "Describe tu fantasía sexual más oscura que nunca le has contado a nadie",
                "Si tuvieras que elegir a alguien de esta habitación para tener sexo, ¿quién sería y por qué?",
                "¿Qué es lo más extremo que has hecho durante el sexo?",
                "Describe en detalle qué te gustaría que te hicieran ahora mismo",
                "¿Qué fetiches tienes que consideras inusuales?",
                "¿Has practicado alguna vez BDSM? Cuenta tu experiencia",
                "Si pudieras tener sexo con cualquier persona famosa, ¿quién sería y qué le harías?",
                "¿Cuál ha sido la cosa más sucia que has dicho durante el sexo?",
                "¿Alguna vez has tenido sexo por dinero o favores?",
                "Describe tu mejor orgasmo y cómo sucedió",
                "¿Alguna vez has tenido sexo en grupo? Describe la experiencia",
                "¿Te gustaría ser dominado/a con esposas y vendas? ¿Por qué?",
                "¿Alguna vez has experimentado con juegos de rol? ¿Cuáles?",
                "¿Te has grabado alguna vez durante el sexo? ¿Qué pasó con el video?",
                "¿Cuál es tu mayor fantasía sexual que te da vergüenza admitir?",
                "¿Alguna vez has provocado a alguien deliberadamente en público?",
                "¿Has tenido sexo con alguien de este grupo o has querido tenerlo?",
                "¿Qué harías si tu pareja te propusiera un trío?",
                "Describe una experiencia sexual que te haya cambiado la vida",
                "¿Alguna vez has pagado por sexo o servicios sexuales?",
                "Si pudieras cumplir una fantasía sexual ahora mismo con alguien de esta habitación, ¿cuál sería?",
                "¿Has tenido alguna vez un encuentro sexual con un desconocido?",
                "¿Qué es lo más extremo que has hecho por placer?",
                "¿Alguna vez has tenido sexo mientras alguien más estaba en la misma habitación?",
                "¿Te excita que te humillen verbalmente durante el sexo?",
                "¿Qué fantasía sexual aún no has podido cumplir?",
                "¿Alguna vez has practicado voyeurismo o exhibicionismo?",
                "¿Has tenido alguna vez relaciones con alguien comprometido?",
                "¿Te has masturbado pensando en alguien de este grupo?",
                "¿Alguna vez has probado juguetes sexuales extremos?"
            ],
            extreme: [
                "Cuenta en detalle la experiencia sexual más tabú que has tenido",
                "¿Qué fantasía sexual te da vergüenza admitir que tienes?",
                "Si pudieras tener sexo con cualquier persona de este grupo sin consecuencias, ¿con quién sería y qué le harías exactamente?",
                "¿Alguna vez has grabado un video sexual? ¿Con quién y qué pasó con el video?",
                "Describe la experiencia sexual más salvaje que has tenido y no te arrepientes",
                "¿Qué es lo más extremo que estarías dispuesto a probar sexualmente?",
                "¿Alguna vez has participado en una orgía? Cuenta todos los detalles",
                "¿Qué fantasía sexual tienes con alguien de este grupo? Sé específico",
                "¿Cuál es tu mayor secreto sexual que nunca le has contado a nadie?",
                "Si tuvieras que elegir entre dos personas de este grupo para un trío, ¿quiénes serían y por qué?",
                "¿Alguna vez has tenido una relación sexual con alguien prohibido? (familiar, profesor, etc.)",
                "Describe detalladamente tu fantasía más perversa",
                "¿Has practicado alguna vez sexo con dolor? ¿Qué te gusta exactamente?",
                "Si tuvieras que hacer un trío con dos personas de este grupo, ¿quiénes serían y qué les harías?",
                "¿Alguna vez has practicado voyeurismo o exhibicionismo? Cuenta tu experiencia",
                "¿Qué es lo más 'sucio' o tabú que has hecho o te gustaría hacer?",
                "¿Alguna vez has tenido una experiencia sexual bajo los efectos de drogas o alcohol? ¿Cómo fue?",
                "¿Has mantenido alguna vez una relación sexual con alguien comprometido?",
                "Si pudieras tener sexo con alguien de esta habitación, ¿qué posiciones usarías y por qué?",
                "¿Has hecho alguna vez algo sexual que ahora te avergüence?",
                "Cuenta tu experiencia más extrema con juguetes sexuales",
                "¿Alguna vez has tenido fantasías sexuales con personas de tu mismo género? Detállalas",
                "Si te ofrecieran dinero por tener sexo delante de todos los presentes, ¿cuánto pedirías?",
                "¿Has tenido alguna vez una experiencia sexual donde te hayas sentido completamente sin control?",
                "¿Qué harías si te dieran acceso ilimitado al cuerpo de la persona que más deseas durante 24 horas?",
                "¿Alguna vez has intercambiado pareja con alguien?",
                "¿Cuánto cobrarías por tener sexo con alguien que no te atrae?",
                "¿Alguna vez has tenido una experiencia sexual con alguien famoso?",
                "¿Cuál es la actividad sexual más tabú que te gustaría probar?",
                "¿Alguna vez has tenido una experiencia sexual que te haya hecho llorar?"
            ]
        },
        dare: {
            mild: [
                "Quítate una prenda de ropa",
                "Da un beso en la mejilla a la persona de tu elección",
                "Deja que alguien del grupo te acaricie el brazo durante 30 segundos",
                "Haz tu mejor cara de orgasmo",
                "Envía un mensaje sugestivo a un contacto de tu teléfono",
                "Muestra tu posición sexual favorita",
                "Haz un baile sensual durante 30 segundos",
                "Deja que alguien del grupo te dé un masaje en los hombros",
                "Haz una llamada telefónica y gime sutilmente durante la conversación",
                "Quítate los zapatos y deja que alguien del grupo te haga cosquillas en los pies",
                "Deja que alguien del grupo te desabroche un botón de la camisa",
                "Susurra al oído de la persona frente a ti algo que te gustaría hacerle",
                "Haz una demostración de cómo te gusta besar",
                "Muéstrale a alguien del grupo la última foto sexy que tienes en tu teléfono",
                "Haz una pose de yoga lo más sugerente posible",
                "Muestra tu cuello para que alguien del grupo lo bese",
                "Deja que alguien del grupo te mire fijamente a los ojos durante 30 segundos",
                "Haz 10 sentadillas de forma sensual",
                "Dile algo seductor al oído a la persona que te parezca más atractiva",
                "Baila pegado a la persona a tu izquierda durante 30 segundos",
                "Déjate tomar una foto en una pose sexy",
                "Lame tu labio de manera provocativa mirando a alguien del grupo",
                "Deja que alguien te dé un masaje en la mano durante 1 minuto",
                "Quítate un accesorio (anillo, pulsera, etc.) con la boca",
                "Deja que alguien del grupo decida qué postura sensual debes hacer"
            ],
            medium: [
                "Quítate dos prendas de ropa",
                "Da un beso en el cuello a la persona de tu elección",
                "Deja que alguien del grupo te vende los ojos y te acaricie durante 1 minuto",
                "Haz una demostración de cómo besas usando tu mano",
                "Muestra tu ropa interior",
                "Deja que la persona de tu derecha te dé una nalgada",
                "Susurra algo sexy al oído de la persona que elijas",
                "Actúa una escena de orgasmo durante 30 segundos",
                "Haz una llamada a alguien que no esté en el juego e intenta excitarlo/a verbalmente",
                "Chupa sensualmente el dedo de la persona que elijas",
                "Deja que dos personas del grupo te quiten una prenda cada una",
                "Haz un baile erótico para la persona que elijas",
                "Describe detalladamente lo que te gustaría hacer con la persona más atractiva del grupo",
                "Déjate dar tres besos donde quiera la persona a tu derecha",
                "Haz una demostración de la posición sexual más incómoda que conoces",
                "Deja que alguien te lama el cuello",
                "Quítate la camiseta y déjala fuera durante una ronda",
                "Deja que la persona más atractiva del grupo te acaricie donde quiera durante 30 segundos",
                "Haz los sonidos que harías durante el sexo",
                "Besa a alguien del grupo durante 10 segundos",
                "Deja que alguien te dé tres chupetones donde quiera",
                "Muestra el escote o el torso de manera provocativa",
                "Masajea los muslos de la persona que elijas durante 30 segundos",
                "Deja que alguien te quite una prenda con los dientes",
                "Juega a 'piedra, papel o tijera' con alguien: quien pierda se quita una prenda"
            ],
            hot: [
                "Quítate tres prendas de ropa",
                "Da un beso en los labios a la persona que elijas",
                "Deja que la persona frente a ti te toque donde quiera durante 1 minuto",
                "Haz un baile erótico a alguien del grupo",
                "Quítate la camisa/blusa y mantente así durante 3 rondas",
                "Deja que alguien del grupo te dé un chupetón",
                "Simula tener sexo con la persona que elijas durante 30 segundos (con ropa)",
                "Acaricia sensualmente el muslo interno de la persona que elijas durante 1 minuto",
                "Muéstrale a todos cómo te gusta ser tocado/a",
                "Deja que dos personas del grupo te besen el cuello simultáneamente",
                "Chupa el lóbulo de la oreja de la persona que más te atraiga",
                "Quédate en ropa interior durante una ronda",
                "Deja que alguien te acaricie por debajo de la ropa durante 30 segundos",
                "Demuestra tu posición favorita con la persona que elijas",
                "Besa a alguien del grupo durante al menos 20 segundos",
                "Deja que te pongan hielo en el cuerpo y lo deslicen hasta que se derrita",
                "Haz un 'lap dance' a quien elijas durante 1 minuto",
                "Deja que tres personas diferentes te den un beso donde ellos quieran",
                "Imita tener un orgasmo lo más realista posible",
                "Describe en voz alta lo que le harías a la persona de tu izquierda si estuvieran solos",
                "Quítate algo de ropa de forma provocativa",
                "Deja que alguien te muerda suavemente en tres partes diferentes del cuerpo",
                "Simula una posición sexual con la persona que elijas",
                "Deja que alguien te lama desde el cuello hasta el oído",
                "Besa el cuerpo de alguien desde el cuello hasta donde te permita"
            ],
            extreme: [
                "Quédate en ropa interior durante 3 rondas",
                "Deja que la persona que elijas te meta hielo bajo la ropa y lo deslice por tu cuerpo",
                "Haz un baile erótico completo quitándote al menos una prenda",
                "Besa apasionadamente a quien elijas durante al menos 1 minuto",
                "Deja que alguien del grupo te lama o bese cualquier parte de tu cuerpo",
                "Debes simular tener un orgasmo mientras alguien del grupo te acaricia",
                "Deja que la persona a tu izquierda te quite una prenda de ropa con los dientes",
                "Llama a un ex o a alguien que te guste y dile algo sexual",
                "Permanece sin camisa/blusa el resto del juego",
                "Debes estar sentado/a en el regazo de la persona que elijas hasta tu próximo turno",
                "Da un masaje íntimo a la persona que elijas durante 2 minutos",
                "Deja que dos personas te quiten la ropa hasta quedar en ropa interior",
                "Haz un 'body shot' del ombligo de quien elijas",
                "Deja que la persona que elijas te toque por dentro de la ropa durante 1 minuto",
                "Simula tener relaciones sexuales con la persona más atractiva del grupo",
                "Besa a tres personas distintas del grupo en menos de 1 minuto",
                "Quítate toda la ropa excepto la interior y quédate así una ronda",
                "Deja que te vendan los ojos y adivina quién te está tocando",
                "Deja que alguien te excite durante 2 minutos sin poder tocarlo/a",
                "Permítele a alguien del grupo que te desabroche toda la ropa que lleves puesta",
                "Haz un striptease completo hasta quedar en ropa interior",
                "Deja que alguien te chupe o lama los dedos de forma erótica",
                "Besa el cuerpo de alguien siguiendo sus indicaciones durante 1 minuto",
                "Simula tu mejor orgasmo mientras alguien te toca",
                "Deja que la persona más atrevida del grupo haga contigo lo que quiera durante 2 minutos"
            ]
        }
    };

    // Retos adicionales
    const additionalDares = [
        // Suaves adicionales
        "Deja que alguien dibuje algo en tu cuerpo con un dedo",
        "Envía un emoji sugerente a los últimos 3 contactos con los que hablaste",
        "Muestra cuál consideras que es tu parte más sexy",
        "Haz tu mejor cara de seducción a cada persona del grupo",
        "Deja que alguien del grupo elija una foto sexy para tu perfil de redes sociales",
        "Acaricia suavemente a la persona de tu derecha durante 30 segundos",
        "Usa algo de la persona a tu derecha como prenda de ropa durante una ronda",
        "Nombra una película erótica que hayas visto y describe una escena",
        "Escribe algo provocativo con el dedo en la espalda de alguien",
        "Canta un fragmento de una canción romántica mirando fijamente a alguien",
        "Deja que la persona a tu izquierda te acomode la ropa como quiera",
        "Muestra a todos tu foto más sexy en redes sociales",
        "Haz que alguien te alimente de forma sensual",
        "Imita cómo seducirías a alguien que te gusta",
        "Deja que alguien te ponga labial/brillo en los labios de forma provocativa",

        // Medianas adicionales
        "Besa el cuello de la persona a tu izquierda durante 20 segundos",
        "Deja que alguien te lama la palma de la mano de forma sensual",
        "Muéstrale al grupo cómo te gusta que te besen el cuello",
        "Quítate la camisa y deja que alguien te acaricie la espalda",
        "Deja que alguien te vende los ojos y te dé de comer algo de forma sensual",
        "Recréa una escena de beso de alguna película famosa con quien elijas",
        "Déjate dar un masaje en los pies por la persona que elijas durante 1 minuto",
        "Ponte de rodillas frente a alguien y declara tu amor de forma exagerada",
        "Haz un baile sensual a la persona que menos te atraiga del grupo",
        "Posa como si estuvieras en una sesión de fotos para adultos",
        "Demuestra tres posiciones de Kamasutra con quien elijas",
        "Susurra al oído de tres personas diferentes algo provocativo",
        "Hazle un chupetón a quien elijas en el lugar que te permita",
        "Haz un baile sexy usando una silla como apoyo",
        "Deja que alguien del grupo escriba algo en tu cuerpo con un marcador",

        // Calientes adicionales
        "Deja que dos personas simultáneamente te besen en distintas partes del cuerpo",
        "Simula tener sexo con una almohada o cojín durante 30 segundos",
        "Describe en voz alta y con detalles lo que le harías a la persona más atractiva del grupo",
        "Permite que la persona a tu derecha te quite dos prendas como quiera",
        "Deja que alguien te muerda suavemente en tres lugares diferentes",
        "Lame sensualmente cualquier parte del cuerpo de quien elijas",
        "Quédate en ropa interior y deja que alguien te tome una foto (que se borrará después)",
        "Deja que alguien dibuje algo en tu cuerpo con su lengua",
        "Besa a alguien del grupo con lengua durante al menos 20 segundos",
        "Envía un mensaje de voz sexual a alguien que no esté en el juego",
        "Deja que alguien te ponga agua/bebida en el cuello y la lama",
        "Imita los sonidos que haces durante el orgasmo",
        "Baila sensualmente encima de alguien durante 30 segundos",
        "Deja que dos personas diferentes muerdan una parte de tu cuerpo",
        "Muestra tu trasero a todo el grupo durante 10 segundos",

        // Extremas adicionales
        "Desnúdate hasta quedar en ropa interior y mantente así durante 2 rondas",
        "Simula tu mejor orgasmo mientras alguien del grupo te toca",
        "Déjate esposar (o atar) durante una ronda completa",
        "Permítele a la persona que elijas que te haga lo que quiera durante 2 minutos",
        "Deja que tres personas del grupo te den un beso en cualquier parte que elijan",
        "Permanece sin camisa o blusa el resto del juego",
        "Deja que alguien escriba algo con los labios o lengua en tu piel",
        "Acaricia íntimamente a la persona que elijas durante 1 minuto",
        "Simula tener sexo con la persona de tu preferencia durante 1 minuto",
        "Haz un baile completamente desnudo durante 20 segundos (si el grupo lo permite)",
        "Deja que alguien del grupo explore tu cuerpo por 60 segundos",
        "Besa apasionadamente a dos personas diferentes durante 30 segundos cada una",
        "Deja que alguien te desnude hasta donde permitas",
        "Ponte a cuatro patas y deja que alguien te monte (simulado) durante 30 segundos",
        "Realiza una demostración de sexo oral en un objeto que elija el grupo"
    ];

    // Añadir retos adicionales a sus respectivas categorías
    for (let i = 0; i < additionalDares.length; i++) {
        if (i < 15) {
            challenges.dare.mild.push(additionalDares[i]);
        } else if (i < 30) {
            challenges.dare.medium.push(additionalDares[i]);
        } else if (i < 45) {
            challenges.dare.hot.push(additionalDares[i]);
        } else {
            challenges.dare.extreme.push(additionalDares[i]);
        }
    }

    // Verdades adicionales
    const additionalTruths = [
        // Suaves adicionales
        "¿Has tenido fantasías con un personaje de ficción?",
        "¿Cuál es el acto sexual más raro que has realizado?",
        "¿Alguna vez has espiado a alguien teniendo sexo?",
        "¿Qué animal serías durante el sexo y por qué?",
        "¿Has tenido alguna vez un sueño erótico con un amigo o amiga?",
        "¿Cuál es la edad de la persona mayor con la que has estado?",
        "¿Qué es lo que nunca harías en la cama?",
        "¿Has tenido alguna vez sexo en un avión o tren?",
        "¿Alguna vez has tenido un flechazo con el padre o madre de algún amigo?",
        "¿Te excita que te hablen sucio?",
        
        // Medianas adicionales
        "¿Cuál es la cosa más pervertida que has hecho solo/a?",
        "¿Alguna vez has fingido estar más excitado/a de lo que realmente estabas?",
        "¿Has tenido alguna experiencia con alguien de tu mismo sexo?",
        "¿Qué palabra te excita más cuando te la dicen al oído?",
        "¿Alguna vez te has arrepentido de acostarte con alguien?",
        "¿Cuál ha sido tu experiencia sexual más dolorosa?",
        "¿Te gustaría probar el intercambio de parejas?",
        "¿Cuál es el mayor número de orgasmos que has tenido en un día?",
        "¿Qué te gusta que te digan durante el sexo?",
        "¿Alguna vez has tenido sentimientos por alguien después de tener sexo casual?",

        // Calientes adicionales
        "¿Alguna vez has tenido una experiencia sexual con un familiar lejano?",
        "¿Has tenido alguna vez relaciones con alguien comprometido?",
        "¿Cuál es tu mayor fetiche que nunca has compartido con nadie?",
        "¿Alguna vez has engañado a tu pareja con su amigo/a?",
        "¿Qué tan importante es el tamaño para ti?",
        "Cuenta una experiencia sexual en la que hiciste algo que normalmente no harías",
        "¿Has pensado alguna vez en el sexo con personas del mismo género siendo heterosexual?",
        "¿Has practicado alguna vez sexo oral con más de una persona a la vez?",
        "¿Alguna vez has tenido sexo con alguien cuyo nombre no conocías?",
        "¿Te has masturbado pensando en alguien presente en este momento?",

        // Extremas adicionales
        "¿Alguna vez has intercambiado pareja con alguien?",
        "¿Cuánto cobrarías por tener sexo con alguien que no te atrae?",
        "¿Alguna vez has tenido una experiencia sexual con alguien famoso?",
        "¿Cuál es la actividad sexual más tabú que te gustaría probar?",
        "¿Alguna vez has tenido una experiencia sexual que te haya hecho llorar?",
        "¿Has tenido alguna vez fantasías con personas prohibidas? ¿Cuáles?",
        "¿Qué es lo más extremo que has hecho para satisfacer a alguien sexualmente?",
        "¿Alguna vez has utilizado comida durante el sexo? ¿Cuál y cómo?",
        "Si pudieras cambiar algo de tu vida sexual pasada, ¿qué sería?",
        "¿Cuál es la mayor cantidad de personas con las que has tenido relaciones en un día?"
    ];

    // Añadir verdades adicionales a sus respectivas categorías
    for (let i = 0; i < additionalTruths.length; i++) {
        if (i < 10) {
            challenges.truth.mild.push(additionalTruths[i]);
        } else if (i < 20) {
            challenges.truth.medium.push(additionalTruths[i]);
        } else if (i < 30) {
            challenges.truth.hot.push(additionalTruths[i]);
        } else {
            challenges.truth.extreme.push(additionalTruths[i]);
        }
    }

    // Add player functionality
    addPlayerBtn.addEventListener('click', () => {
        addPlayer();
    });

    playerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addPlayer();
        }
    });

    function addPlayer() {
        const playerName = playerInput.value.trim();
        if (playerName && !players.includes(playerName)) {
            players.push(playerName);
            updatePlayersList();
            playerInput.value = '';
            updateStartButton();
        }
    }

    function updatePlayersList() {
        playersList.innerHTML = '';
        players.forEach((player, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item player-item';
            li.innerHTML = `
                <span>${player}</span>
                <span class="remove-player" data-index="${index}">&times;</span>
            `;
            playersList.appendChild(li);
        });

        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-player').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                players.splice(index, 1);
                updatePlayersList();
                updateStartButton();
            });
        });
    }

    function updateStartButton() {
        startGameBtn.disabled = players.length < 2;
    }

    // Start game
    startGameBtn.addEventListener('click', () => {
        if (players.length < 2) return;
        
        setupPhase.classList.add('d-none');
        gamePhase.classList.remove('d-none');
        
        // Shuffle players array for randomness
        shufflePlayers();
        
        // Set current player
        currentPlayerIndex = 0;
        updateCurrentPlayer();
    });

    function shufflePlayers() {
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [players[i], players[j]] = [players[j], players[i]];
        }
    }

    function updateCurrentPlayer() {
        currentPlayerSpan.textContent = players[currentPlayerIndex];
    }

    // Spin bottle functionality
    spinButton.addEventListener('click', () => {
        // Disable spin button during spinning
        spinButton.disabled = true;
        
        // Remove previous spin classes
        bottle.classList.remove('spinning');
        
        // Generate random degree for the spin
        const degrees = 1080 + Math.floor(Math.random() * 1800);
        
        // Set the custom property for the spin animation
        bottle.style.setProperty('--rotation-degree', `${degrees}deg`);
        
        // Add spinning class to trigger animation
        bottle.classList.add('spinning');
        
        // Calculate target player index based on spin
        const normalizedDegree = degrees % 360;
        const segmentSize = 360 / players.length;
        targetPlayerIndex = Math.floor(normalizedDegree / segmentSize);
        
        // Make sure target player is not the current player
        if (targetPlayerIndex === currentPlayerIndex) {
            targetPlayerIndex = (targetPlayerIndex + 1) % players.length;
        }
        
        // Wait for animation to complete
        setTimeout(() => {
            spinButton.disabled = false;
            challengeContainer.classList.remove('d-none');
            spinButton.classList.add('d-none');
        }, 3000);
    });

    // Truth or Dare selection
    truthBtn.addEventListener('click', () => {
        showChallenge('truth');
    });

    dareBtn.addEventListener('click', () => {
        showChallenge('dare');
    });

    function showChallenge(type) {
        const level = intensityLevel.value;
        const challengeList = challenges[type][level];
        const randomChallenge = challengeList[Math.floor(Math.random() * challengeList.length)];
        
        challengeType.textContent = type === 'truth' ? 'Verdad' : 'Reto';
        challengeText.textContent = randomChallenge
            .replace('[currentPlayer]', players[currentPlayerIndex])
            .replace('[targetPlayer]', players[targetPlayerIndex]);
            
        challengeDisplay.classList.remove('d-none');
        truthBtn.disabled = true;
        dareBtn.disabled = true;
    }

    // Complete challenge and move to next player
    completedBtn.addEventListener('click', () => {
        // Reset display
        challengeDisplay.classList.add('d-none');
        challengeContainer.classList.add('d-none');
        spinButton.classList.remove('d-none');
        truthBtn.disabled = false;
        dareBtn.disabled = false;
        
        // Move to next player
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateCurrentPlayer();
    });
}); 