import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// import { ShellFeatureModule } from '@beekin-app/shell/feature';
// import { HeaderComponent } from '@beekin-app/shell/ui/header';
import { DemoComponent } from './demo/demo.component';

export const shellFeatureRoutes: Routes = [
  {
    path : '',
    component : DemoComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'demo', children: shellFeatureRoutes}]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
