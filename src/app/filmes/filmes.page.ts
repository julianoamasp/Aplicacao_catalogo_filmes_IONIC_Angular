import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
  providers: [
    MovieService
  ]
})
export class FilmesPage implements OnInit {

  public lista_filmes = new Array<any>();

  public filmes: {assunto: string, editora: string, autor: string}[] = [
    {"assunto":'Politica', "editora":'Abril', "autor":'Jhonas Rex'},
    {"assunto":'Romances', "editora":'Abril', "autor":'Will smith'},
    {"assunto":'Auto-Ajuda', "editora":'Abril', "autor":'Alask Ruff'},
    {"assunto":'Drama', "editora":'Abril', "autor":'Honey bear'},
  ];

  

  constructor(public navCtrol: NavController, public navParams: NavParams, private movieService: MovieService) { 
    
    }
    
    ionViewDidLoad() {
      this.movieService.getLatestMovies().subscribe(data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
       
        }, error => {
        console.log(error);
        }
        )
      }
  ngOnInit() {
  }

}
