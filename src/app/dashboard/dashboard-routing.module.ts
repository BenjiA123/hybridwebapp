import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { OverviewComponent } from './overview/overview.component';
import { PropertiesComponent } from './properties/properties.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent, children: [
      { path: "overview", component: OverviewComponent },
      { path: "properties", component: PropertiesComponent },
      { path: "settings", component: SettingsComponent },
      { path: "wallet", component: WalletComponent },
      { path: "favorites", component: FavoritesComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
