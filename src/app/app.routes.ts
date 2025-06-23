import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'product-card',
        loadComponent: () => import('./product-card/product-card.component').then(m => m.ProductCardComponent),
    },
    {
        path:'',
        loadComponent: () => import('./dia#2/list-card-component/list-card-component.component').then(m => m.ListCardComponentComponent),
    }
];
