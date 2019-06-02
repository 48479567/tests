import { Component, OnInit } from '@angular/core';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';

@Component({
  selector: 'app-hero-check',
  templateUrl: './hero-check.component.html',
  styleUrls: ['./hero-check.component.scss'],
  providers: [
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }
  ]
})
export class HeroCheckComponent implements OnInit {
  input = 0;

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
