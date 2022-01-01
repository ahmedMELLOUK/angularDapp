import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { SetupIllustrationsComponent } from './setup-illustrations/setup-illustrations.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    AnnoncesComponent,
    ProductcardComponent,
    SetupIllustrationsComponent,
    CategoriesComponent,
    CreateItemComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
