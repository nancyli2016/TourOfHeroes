import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(currentHero: Hero): void {
    this.selectedHero = currentHero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
