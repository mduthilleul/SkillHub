import Alpine from "alpinejs";

(window as any).Alpine = Alpine;

type Question = {
    id:string;
    question: string
    answer: string,
    categoryId: string,
    category: string,
    difficulty: string,
    badAnswers: string[],
}

const questions: Question[] = [
  {
    id: "cmck8wdut001shzrohzz0l96x",
    question: "Quelle série de film de S-F a été réalisée par les Wachowski ?",
    answer: "Matrix",
    categoryId: "cmck8wdgi0003hzroikw9krfe",
    category: "tv_cinema",
    difficulty: "facile",
    badAnswers: ["Star Wars", "Retour vers le futur", "Star Trek"],
  },
  {
    id: "cmck8wdv7007khzroqkpjtogv",
    question: "qui a réalisé le film Avatar ?",
    answer: "James Cameron",
    categoryId: "cmck8wdgi0003hzroikw9krfe",
    category: "tv_cinema",
    difficulty: "facile",
    badAnswers: ["Bob Marley", "jean Dujardin", "Samuel Etienne"],
  },
  {
    id: "cmguz1h970003hzaup5qeleap",
    question: "Dans quelle série apparaît le personnage Walter White ?",
    answer: "Breaking Bad",
    categoryId: "cmck8wdgi0003hzroikw9krfe",
    category: "tv_cinema",
    difficulty: "facile",
    badAnswers: ["Narcos", "Dexter", "The Sopranos"],
  },
  {
    id: "cmck8wdus0013hzroulcqgayv",
    question: "Qui animait le jeu télévisé le Bigdil ?",
    answer: "Vincent Lagaf'",
    categoryId: "cmck8wdgi0003hzroikw9krfe",
    category: "tv_cinema",
    difficulty: "facile",
    badAnswers: ["Philippe Risoli", "Laurence Boccolini", "Nagui"],
  },
  {
    id: "cmguz1h970005hzaufq8fqsrb",
    question: "Quelle actrice incarne Katniss Everdeen dans 'Hunger Games' ?",
    answer: "Jennifer Lawrence",
    categoryId: "cmck8wdgi0003hzroikw9krfe",
    category: "tv_cinema",
    difficulty: "facile",
    badAnswers: ["Emma Watson", "Scarlett Johansson", "Kristen Stewart"],
  },
];

type TransformedQuestion = Question & {
    answers: string[]
}

const transformedQuestions: TransformedQuestion[] = questions.map(question =>  ({
    ...question,
    answers: [question.answer, ...question.badAnswers].sort(() => Math.random() - 0.5)
}))

Alpine.store("quizz", {
  questions: transformedQuestions,
});

Alpine.start();
