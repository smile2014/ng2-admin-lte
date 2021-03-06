import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';

const routes: Routes = [
    // Root
    { path: '', component: HomeComponent},
    { path: 'page/:id', component: PageNumComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
