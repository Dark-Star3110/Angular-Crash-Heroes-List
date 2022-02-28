import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROS);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROS.find((hero) => hero.id === id)!;
    // console.log(hero);

    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
