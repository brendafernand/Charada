import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  charada: string = '';
  resposta: string = '';
  respostaSecreta: string = '';
  animacao: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.solicitarCharada();
   
  }

  solicitarCharada(){
    this.animacao = false;
    const url = "http://lucasreno.kinghost.net/charada";
    this.http.get<any[]>(url).subscribe( resposta => {
      this.charada = resposta[0].pergunta;
      this.respostaSecreta = resposta [0].resposta;
      this.resposta='';
      this.animacao = true;
    });
  }

  solicitarResposta(){
    this.resposta = this.respostaSecreta;
  }

}
