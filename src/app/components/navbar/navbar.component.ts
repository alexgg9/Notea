import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  language: string = 'en';

  constructor(public loginS:LoginService,private translateService:TranslateService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.loginS.signOut();
  }

  changeLanguage(en: string) {
    switch (en){
      case 'en':
        this.translateService.use('en');
        this.language = 'en';
        break;
      case 'es':
        this.translateService.use('es');
        this.language = 'es';
        break;
    }
  }
}