import { Injectable } from '@angular/core';
import { IHero } from 'src/app/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<IHero> {
    const hero = HEROES.find(h => h.id === id) as IHero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}


