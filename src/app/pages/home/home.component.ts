import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  text = 'Arthur-Émile de DONNO';
  letters: string[] = [];

  ngOnInit(): void {
  this.letters = this.text.split('').map(char =>
    char === ' ' ? '\u00A0' : char
  );  }

}
