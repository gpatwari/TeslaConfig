import { Routes } from '@angular/router';

import { CarModelSelectorComponent } from './carmodel-selector/carmodel-selector.component';
import { ConfigSelectorComponent } from './config-selector/config-selector.component';
import { SummaryComponent } from './summary/summary.component';
import { inject } from '@angular/core';
import { CarModelService } from './carmodel.service';
import { ConfigService } from './config.service';

export const routes: Routes = [
  { path: 'select-model', component: CarModelSelectorComponent },
  {path: 'select-config', component: ConfigSelectorComponent, canActivate: [() => inject(CarModelService).modelCode$.value.length > 0] },
  {path: 'summary', component: SummaryComponent,canActivate: [() => inject(ConfigService).configId > 0]},
  { path: '**', redirectTo: 'select-model' }
];
