import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StaticFiles } from './staticFIles';
import { ILanguage } from './components/language-selector/models/language';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';

  constructor(public translate: TranslateService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.translate.use(this.languageService.selectedLanguage().code)
  }

  get languages() {
    return StaticFiles.languages
  }
}
