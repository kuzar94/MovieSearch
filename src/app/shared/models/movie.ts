import { Show } from './show';

export class Movie {
  score: string;
  show: Show;
  constructor(score: string,
              show: Show) {
    this.score = score;
    this.show = show;
  }
}
