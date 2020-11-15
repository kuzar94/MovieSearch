import { Rating } from './rating';
import { Image } from './image';

export class Show {
  externals: object;
  genres: string[];
  id: string;
  image: Image;
  language: string;
  name: string;
  network: object;
  officialSite: string;
  premiered: Date;
  rating: Rating;
  runtime: string;
  schedule: object;
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: object;
  weight: number;
  _links: object;

  constructor(
    externals: object,
    genres: string[],
    id: string,
    image: Image,
    language: string,
    name: string,
    network: object,
    officialSite: string,
    premiered: Date,
    rating: Rating,
    runtime: string,
    schedule: object,
    status: string,
    summary: string,
    type: string,
    updated: number,
    url: string,
    webChannel: object,
    weight: number,
    _links: object
  ) {
    this.externals = externals;
    this.genres = genres;
    this.id = id;
    this.image = image;
    this.language = language;
    this.name = name;
    this.network = network;
    this.officialSite = officialSite;
    this.premiered = premiered;
    this.rating = rating;
    this.runtime = runtime;
    this.schedule = schedule;
    this.status = status;
    this.summary = summary;
    this.type = type;
    this.updated = updated;
    this.url = url;
    this.webChannel = webChannel;
    this.weight = weight;
    this._links = _links;
  }
}

