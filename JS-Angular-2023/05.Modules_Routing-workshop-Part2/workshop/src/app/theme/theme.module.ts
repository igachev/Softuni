import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewThemeComponent,
    ThemesComponent,
    ThemeComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule
  ]
})
export class ThemeModule { }
