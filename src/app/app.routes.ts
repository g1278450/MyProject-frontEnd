import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { AuthGuard } from './common/auth.guard';
// 路徑設定
const routes: Routes  = [
    {path: 'login', component: LoginComponent },
    {path: 'index', component: IndexComponent},
    {path: 'stock', component: StockDataComponent, canActivate: [AuthGuard] },
    {path: '**', component: ErrorComponent, canActivate: [AuthGuard]}  // 萬用路由，不可設在前面
  ];

  @NgModule({
    imports: [
        // 導入設定
      RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutesModule { }