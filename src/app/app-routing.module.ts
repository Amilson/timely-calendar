import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { MainLayoutModule } from './layouts/main/main-layout.module';

@NgModule({
  imports: [
    MainLayoutModule,
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: '/app/main/calendars',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'app',
        children: [
          {
            path: 'main',
            component: MainLayoutComponent,
            loadChildren: () => {
              return import('./main').then((m: any) => {
                return m.MainModule;
              });
            }
            // loadChildren: './main/main.routing.module#MainModule'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
