import { Injectable, OnInit, signal } from '@angular/core';
import { ILanguage } from '../components/language-selector/models/language';
import { StaticFiles } from '../staticFIles';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selectedLanguage = signal<ILanguage>(StaticFiles.languages[0])

  changeLanguage(language: ILanguage) {
    this.selectedLanguage.update(lang => lang = language)
    localStorage.setItem("language", JSON.stringify(language))
    this.translate.use(language.code)
  }
  constructor(public translate: TranslateService) {
    let data = localStorage.getItem("language")
    if (data) {
      this.selectedLanguage.update(lang => lang = JSON.parse(data!))
    }
    else {
      this.selectedLanguage.update(lang => lang = StaticFiles.languages[0])
    }
  }
}
