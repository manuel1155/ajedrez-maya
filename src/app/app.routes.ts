import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JuegoComponent } from './juego/juego.component';

export const routes: Routes = [
    {path : '', component : HomePageComponent},
    {path : 'juego-nuevo', component : JuegoComponent},
];
