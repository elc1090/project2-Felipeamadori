import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService, Quote } from '../service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public quotes: Quote[] = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  bntStyle: string = '';
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getRandomQuestions(50).subscribe(quotes => {
      this.quotes = quotes;
      for (let index = 0; index < this.quotes.length; index = index + 5) {
        this.mountQuiz(this.quotes.slice(index,index+5));
      }
    });
  }

  mountQuiz(quotes: Quote[]) {
    let questionText: string, options: any[] = [];
    questionText = quotes[(Math.floor(Math.random() * (quotes.length - 0) + 0))].sentence;
    quotes.forEach(quote => {
      let option: any;
      if (quote.sentence == questionText) {
        option = { text : quote.character.name, correct: true }
      } else {
        option = { text : quote.character.name }
      }
      if (!options.find(op => op.text == option.text)) {
        options.push(option);
      }
    });
    this.questionList.push({
      questionText: questionText,
      options: options
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }

}
