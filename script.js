const questions = [
    { image: "f1.jpeg", question: "Em qual cidade tiramos esta foto?", answers: ["Dom Eliseu", "Salinas", "Imperatriz", "Itinga"], correct: 2 },
    { image: "f2.jpeg", question: "Em qual Show tiramos esta foto?", answers: ["Manu Batidão", "Natan", "Evoney Fernandez", "Biu do Piseiro"], correct: 0 },
    { image: "r12.jpeg", question: "Ano do nosso Primeiro Beijo?", answers: ["2016", "2019", "2017", "2018"], correct: 3 },
    { image: "r1.jpeg", question: "Qual foi o presente mais memorável que já te dei?", answers: ["Calcinhas", "Cestas cacau show", "Caneca e agenda personalizado", "Brincos, cordão"], correct: 1 },
    { image: "f3.jpeg", question: "Em qual cidade tiramos esta foto?", answers: ["Dom Eliseu", "Salinas", "Imperatriz", "Ulianópolis"], correct: 3 },
    { image: "r20.jpeg", question: "Em qual Agro fest tirei essa foto sua?", answers: ["2023", "2022", "2024", "2021"], correct: 0 },
    { image: "f4.jpeg", question: "Qual ano tiramos esta foto?", answers: ["2021", "2023", "2024", "2020"], correct: 2 },
    { image: "f5.jpeg", question: "Em qual cidade tiramos esta foto?", answers: ["Dom Eliseu", "Ulianópolis", "Imperatriz", "Itinga"], correct: 0 },
    { image: "r24.jpeg", question: "Qual local fizemos sexo pela primeira vez?", answers: ["karibe (Dom Eliseu)", "Intimus (itinga)", "Mais Você (Ulianópolis)", "Thaj Mahal (Itinga)"], correct: 3 },
    { image: "f6.jpeg", question: "Em qual cidade tiramos esta foto?", answers: ["Itinga", "Salinas", "Imperatriz", "Dom Eliseu"], correct: 3 },
    { image: "f7.jpeg", question: "Qual mês tiramos essa foto?", answers: ["Fevereiro", "Março", "Abril", "Junho"], correct: 2 },
    { image: "r23.jpeg", question: "Qual parte do seu corpo que acha que mais tenho desejo?", answers: ["Bunda, bucetinha e peitos", "boca e olhos", "Cabelos e cintura",], correct: 0 },
    { image: "r21.jpeg", question: "Qual habilidade ou talento que acha que mais admiro em você?", answers: ["Seu talento artístico ou criativo", "Sua capacidade de criar conexões e amizades", " Sua habilidade de resolver problemas", "Sua habilidade culinária"], correct: 3 },
    { image: "f8.jpeg", question: "Qual foi o ano dessa foto?", answers: ["2022", "2023", "2024", "2021"], correct: 3 },
    { image: "f9.jpeg", question: "Qual cidade tiramos essa foto?", answers: ["Ulianópolis", "Dom Eliseu", "Imperatriz", "Itinga"], correct: 1 },
    { image: "f10.jpeg", question: "Qual show tiramos essa foto?", answers: ["Manu Batidão", "Natan", "Evoney Fernandez", "Biu do Piseiro"], correct: 3 },
    { image: "r2.jpeg", question: "Qual rio que mais fomos juntos?", answers: ["Concren", "Por do sol", "Água azul",], correct: 1 },
    { image: "r3.jpeg", question: "Melhor viagem que fizemos juntos?", answers: ["Salinas", "Sumauma", "Park freitas",], correct: 0 },
    { image: "r5.jpeg", question: "Essa foto foi tirada em qual rio?", answers: ["rio do jacaré (ulianópolis)", "Rio da ponte no Itinga-ma", "festa no rio com seus colegas da faculdade", "Rio Por do sol Itinga-ma"], correct: 2 },
    { image: "r6.jpeg", question: "Estavamos em qual cidade?", answers: ["Dom Eliseu", "Itinga", "Ulianópolis",], correct: 0 },
    { image: "r7.jpeg", question: "Qual é o melhor presente que você já me deu?", answers: ["Pulseiras", "Cuecas",], correct: 1 },
    { image: "r4.jpeg", question: "Qual foi o nosso primeiro destino de viagem juntos?", answers: ["Belém", "Itinga", "ITZ", "Salinas"], correct: 3 },
    { image: "r8.jpeg", question: "Série de TV que ja assistimos juntos até o final?", answers: ["Jovem cheodon", "The Walking Dead ", "Good Doctor"], correct: 1 },
    { image: "r9.jpeg", question: "Para onde fomos no último feriado?", answers: ["Roça", "Desfile Escolar", "Faculdade"], correct: 1 },
    { image: "r10.jpeg", question: "Para onde eu estava indo nesse dia?", answers: ["Itinga", "Belém", "Roraima", "Ulianópolis"], correct: 2 },
    { image: "r11.jpeg", question: "Em qual ano foi me encontrar em Belém?", answers: ["2021", "2022", "2024", "2017"], correct: 0 },
    { image: "r13.jpeg", question: "Qual cidade estavamos nessa foto?", answers: ["Itinga", "Ulianópolis", "Campestre", "Roça"], correct: 2 },
    { image: "r14.jpeg", question: "Qual é o apelido carinhoso que gosto de chamar você?", answers: ["Amor", "Jaque", "Linda", "Docinho"], correct: 3 },
    { image: "r15.jpeg", question: "Onde tiramos essa foto?", answers: ["Roça", "casa Irlene", "Em Casa", "Casa do Adriano"], correct: 0 },
    { image: "r16.jpeg", question: "Qual Show tirei essa foto sua?", answers: ["Manu Batidão", "Natan", "Mary Fernandez", "Zé Felipe"], correct: 2 },
    { image: "r17.jpeg", question: "Qual é a Qualidade que mais acha que admiro em você?", answers: ["Bondosa com todos ", "Exelente Mãe e Filha", "Dedicada ao trabalho", "Estudiosa"], correct: 1 },
    { image: "r18.jpeg", question: "Qual seria o superpoder que você gostaria que ambos tivessem para melhorar nosso relacionamento?", answers: ["Telepatia para entender os pensamentos", " Poder de cura para resolver desentendimentos instantaneamente", "Invisibilidade para surpreender o outro", "Controle do tempo para aproveitar cada momento"], correct: 1 },
    { image: "r19.jpeg", question: "Qual ano fizemos sexo pela primeira vez?", answers: ["2020", "2017", "2019", "2018"], correct: 3 },
    { image: "r22.jpeg", question: "Como você prefere que eu demonstre meu desejo e atração por você?", answers: ["Com ações que mostrem que você está sempre em meus pensamentos", "Com toques e carícias sensuais", "Com palavras de afeto e elogios", "Através de gestos carinhosos e espontâneos"], correct: 0 },

];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    const photo = document.getElementById('photo');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');

    photo.src = question.image;
    questionText.innerHTML = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerHTML = answer;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        score++;
        alert('Resposta correta! Te amo❤️😘');
    } else {
        alert('Poxa resposta errada. 😢😞');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}
function showResult() {
    document.getElementById('question-container').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    // Calcule a porcentagem e crie a mensagem
    const percentage = (score / questions.length) * 100;

    // Mensagem personalizada
    let loveMessage;
    if (score === questions.length) {
        loveMessage = "Você é simplesmente incrível Amor! ❤️ Acertou todas as perguntas, estou tão orgulhoso de você!";
    } else if (score > (questions.length / 2)) {
        loveMessage = `Parabéns, Meu amor! Você acertou ${score} de ${questions.length} perguntas! Isso mostra o quanto você tem memórias boas de nós. Te amo! ❤️😘`;
    } else {
        loveMessage = `Você acertou ${score} de ${questions.length} perguntas. Mas não se preocupe, o importante é o amor que temos! Vamos tentar novamente juntos? 😘❤️`;
    }

    resultText.innerHTML = loveMessage;

    // Estilização da mensagem
    if (percentage > 50) {
        resultContainer.style.backgroundColor = '#d4edda'; // Fundo verde claro
        resultText.style.color = '#155724'; // Texto verde escuro
    } else {
        resultContainer.style.backgroundColor = '#f8d7da'; // Fundo vermelho claro
        resultText.style.color = '#721c24'; // Texto vermelho escuro
    }

    resultContainer.style.display = 'block'; // Mostra o resultado
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    showQuestion(currentQuestionIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestionIndex);
});