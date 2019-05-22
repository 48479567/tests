import { Injectable } from '@angular/core';

import { InMemoryDbService } from "angular-in-memory-web-api";

import { Hero } from "./hero";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb(): { heroes: Hero[] } {
    const heroes: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },

    ];
    return { heroes };
  }

  // Anula el método genId para asegurar que un héroe siempre tenga una identificación. Si la matriz de héroes está vacía, el siguiente método devuelve el número inicial (11). Si la matriz de héroes no está vacía, el siguiente método devuelve el más alto: ID de héroe + 1.
  genId(heroes: Hero[]): number {
    console.log(heroes);
    return heroes.length > 0 ? Math.max(...heroes.map((hero: Hero) => hero.id)) + 1 : 11;
  }
}
