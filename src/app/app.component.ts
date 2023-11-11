import { Component } from '@angular/core';
import { INote } from './model/INote';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notea';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
  }

  public alerta(){
    alert("Alerta Roja");
    }
}
