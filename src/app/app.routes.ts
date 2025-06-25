import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'product-card',
        loadComponent: () => import('./product-card/product-card.component').then(m => m.ProductCardComponent),
    },
    {
        path:'',
        loadComponent: () => import('./dia#2/list-card-component/list-card-component.component').then(m => m.ListCardComponentComponent),
    },
    {
        path:'user-panel',
        loadComponent: () => import('./dia#4/user-panel/user-panel.component').then(m => m.UserPanelComponent),
    }
];
