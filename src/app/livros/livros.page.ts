import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {


  public livros: {titulo: string, subtitulo: string, capa: string, editora: string, autor: string, isbn: string, publicacao: string, paginas: string}[] = [
    {"titulo":'Politica', "subtitulo":'Abril', "capa":'Jhonas Rex', 'editora':'Abril','autor':'billy','isbn':'não', 'publicacao':'08/8/18','paginas':'400'},
    {"titulo":'A contra', "subtitulo":'Que te cobra', "capa":'Triunfo', 'editora':'Globo','autor':'Fernão Baron','isbn':'sim', 'publicacao':'02/1/15','paginas':'100'}
  ];
  constructor() { }


  ngOnInit() {
  }

}
