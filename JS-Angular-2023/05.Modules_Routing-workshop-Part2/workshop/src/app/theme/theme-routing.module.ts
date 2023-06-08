import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemesComponent } from './themes/themes.component';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
    {
        path:'themes',
        children:[
            {
                path:'',
                pathMatch:'full',
                component:ThemesComponent
            },

            {
                path:':themeId',
                component:ThemeComponent
            }
        ]
    },

    {
        path:'add-theme',
        component:NewThemeComponent,
        canActivate:[AuthActivate],
        data:{
            authenticationRequired: true,
            authenticationFailureRedirectUrl: '/login'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }