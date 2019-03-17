import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  public filmes: {assunto: string, editora: string, autor: string}[] = [
    {"assunto":'Politica', "editora":'Abril', "autor":'Jhonas Rex'},
    {"assunto":'Romances', "editora":'Abril', "autor":'Will smith'},
    {"assunto":'Auto-Ajuda', "editora":'Abril', "autor":'Alask Ruff'},
    {"assunto":'Drama', "editora":'Abril', "autor":'Honey bear'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
