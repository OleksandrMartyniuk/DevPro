import { CategoriesViewComponent } from './components/categories-view/categories-view.component';
import { MenuService } from './services/menu.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

const categoriesRoutes: Routes = [
    { path: '', component: ProductViewComponent, data: {category: 'Breakfast'}},
    { path: 'breakfasts', component: ProductViewComponent, data: {category: 'Breakfast'}},
    { path: 'pizza', component: ProductViewComponent, data: {category: 'Pizza'}},
    { path: 'wok', component: ProductViewComponent, data: {category: 'Wok'}},
    { path: 'deserts', component: ProductViewComponent, data: {category: 'Deserts'}},
    { path: 'drinks', component: ProductViewComponent, data: {category: 'Drinks'}},
];

@NgModule({
    declarations: [
        ProductItemComponent,
        ProductViewComponent,
        CategoriesViewComponent
    ],
    imports: [
        RouterModule.forRoot(categoriesRoutes),
        CommonModule,
    ],
    exports: [
        ProductItemComponent,
        ProductViewComponent,
        CategoriesViewComponent
    ],
    providers: [
        MenuService
    ],
})
export class MenuModule { }
