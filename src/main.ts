import Alpine from "alpinejs";

(window as any).Alpine = Alpine;

type Question = {
  id: string;
  question: string;
  answer: string;
  categoryId: string;
  category: string;
  difficulty: string;
  badAnswers: string[];
};

const fetchQuestions = async () => {
  const response = await fetch(
    "https://quizzapi.jomoreschi.fr/api/v2/quiz?limit=5&category=tv_cinema&difficulty=facile"
  );
  const data = await response.json();
  return data.quizzes.map((question: Question) => ({
    ...question,
    answers: [question.answer, ...question.badAnswers].sort(
      () => Math.random() - 0.5
    ),
  }));
};

Alpine.store("quizz", {
  isLoading: true,
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: "",
  isSubmitted: false,
  async init() {
    try {
      this.questions = await fetchQuestions();
    } catch (error) {
      alert(error.message);
    } finally {
      this.isLoading = false;
    }
  },
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  },
  onSubmitQuestion() {
    if (this.selectedAnswer) {
      this.isSubmitted = true;
    }
  },
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
      this.isSubmitted = false;
      this.selectedAnswer = "";
    } else {
      alert("Votre score est ...");
    }
  },
});

Alpine.start();
