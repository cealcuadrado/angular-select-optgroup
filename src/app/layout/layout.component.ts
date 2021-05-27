import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  currentMovie: string;

  actionMovies = ['Ready Player One', 'Minority Report'];
  scifiMovies = ['A.I. Artificial Intelligence', 'E.T.', 'War of the Worlds'];
  adventureMovies = ['The Sugarland Express', 'The BFG', 'Jurassic Park'];

  constructor() { }

  ngOnInit(): void {
  }

}
