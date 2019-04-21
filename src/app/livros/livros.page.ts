import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MovieService } from '../movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
  providers:[
    MovieService
  ]
})
export class LivrosPage implements OnInit {

  public livros = new Array<any>();

  constructor(
    public http:Http,
    public movieService:MovieService,
    public navController:NavController,
    ) { 
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.movieService.getTeste().subscribe(
    data => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);

      for (var li in objeto_retorno){
        console.log(li);
        this.livros.push(objeto_retorno[li]);
      }
    console.log(objeto_retorno);
    }, error => {
    console.log(error);
    })}

  ngOnInit() {
  }

}
