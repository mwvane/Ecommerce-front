import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { AppComponent } from './app.component';
import { RegisterComponent } from './shared/auth/register/register.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderTopComponent } from './shared/header-top/header-top.component';
import { SearchComponent } from './components/search/search.component';
import {MenuModule} from 'primeng/menu';
import { BannerComponent } from './components/banner/banner.component';
import { CategorySliderComponent } from './components/category/category-slider/category-slider.component';
import { CategorySliderItemComponent } from './components/category/category-slider-item/category-slider-item.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DescktopNavigationMenuComponent } from './components/descktop_navigation_menu/desktop-navigation-menu/descktop-navigation-menu.component';
import { DescktopNavigationMenuItemComponent } from './components/descktop_navigation_menu/desktop-navigation-menu-item/desktop-navigation-menu-item.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SliderItemComponent } from './shared/sidebar/slider-item/slider-item.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ProductComponent } from './product/product.component';
import { SectionComponent } from './components/section/section.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LanguageSelectorComponent,
    HeaderComponent,
    HeaderTopComponent,
    SearchComponent,
    BannerComponent,
    CategorySliderComponent,
    CategorySliderItemComponent,
    HomeComponent,
    FooterComponent,
    DescktopNavigationMenuComponent,
    DescktopNavigationMenuItemComponent,
    SidebarComponent,
    SliderItemComponent,
    CountdownComponent,
    ProductComponent,
    SectionComponent,
    ShowcaseComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateloader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    DialogModule,
    BrowserAnimationsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateloader(http: HttpClient) {
  return new TranslateHttpLoader(http)
}
