import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StaticFiles } from './staticFIles';
import { ILanguage } from './components/language-selector/models/language';
import { LanguageService } from './services/language.service';
import { Isocial } from './models/social';
import { IBanner } from './models/banner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  headerTopText: string = "free shipping this week order over"

  constructor(public translate: TranslateService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.translate.use(this.languageService.selectedLanguage().code)
  }

  get languages() {
    return StaticFiles.languages
  }
  get social(){
    return StaticFiles.social
  }
}
