import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
