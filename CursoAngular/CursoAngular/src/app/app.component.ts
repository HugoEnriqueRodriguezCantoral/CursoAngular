import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CursoAngular';
  suma:number=0;
  a: number=0;
  b: number=1;

  public SumaNumero(){
    this.suma = this.a + this.b;
  }
  public RestaNumero(){
    this.suma = this.a - this.b;
  }
  
}