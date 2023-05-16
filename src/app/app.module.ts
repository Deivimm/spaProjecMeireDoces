import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './navBar/navBar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosComponent } from './sobreNos/sobreNos.component';
import { CasamentosComponent } from './casamentos/casamentos.component';
import { AniversariosComponent } from './aniversarios/aniversarios.component';
import { DocesComponent } from './doces/doces.component';

@NgModule({
  declarations: [					
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
      SobreNosComponent,
      CasamentosComponent,
      AniversariosComponent,
      DocesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
