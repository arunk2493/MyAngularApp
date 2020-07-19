import { Injectable } from '@angular/core';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  // tslint:disable-next-line:typedef
  createDb() {
    const heroes = [
      { id: 11, name: 'MGR' },
      { id: 12, name: 'Sivaji' },
      { id: 13, name: 'Rajini' },
      { id: 14, name: 'Kamal' },
      { id: 15, name: 'Thalapathy' },
      { id: 16, name: 'Thala' },
      { id: 17, name: 'Suriya' },
      { id: 18, name: 'Vikram' },
      { id: 19, name: 'SK' },
      { id: 20, name: 'VJS' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
