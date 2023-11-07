import { Component } from '@angular/core';
import { INote } from './model/INote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notea';

  public alerta(){
    alert("Alerta Roja");
    }
}
