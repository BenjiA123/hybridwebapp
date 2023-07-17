import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { OverviewComponent } from './overview/overview.component';
import { WalletComponent } from './wallet/wallet.component';
import { PropertiesComponent } from './properties/properties.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ButtonsComponent } from '../util/buttons/buttons.component';
import { VerifyAccountComponent } from './dialogs/verify-account/verify-account.component';
import { InvestComponent } from './dialogs/invest/invest.component';
import { WithdrawComponent } from './dialogs/withdraw/withdraw.component';
import { AddDebitCardComponent } from './dialogs/add-debit-card/add-debit-card.component';
import { PayoutsComponent } from './dialogs/payouts/payouts.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../util/header/header.component';
import { SideNavComponent } from '../util/side-nav/side-nav.component';


@NgModule({
  declarations: [
    SettingsComponent,
    OverviewComponent,
    WalletComponent,
    PropertiesComponent, ButtonsComponent,
    FavoritesComponent,
    VerifyAccountComponent,
    InvestComponent,
    WithdrawComponent,
    AddDebitCardComponent,
    PayoutsComponent,

    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDialogModule, MatIconModule
  ],
  entryComponents: [
    VerifyAccountComponent,
    InvestComponent,
    WithdrawComponent,
    AddDebitCardComponent,
    PayoutsComponent
  ],
  exports: [
    HeaderComponent,

  ],
})
export class DashboardModule { }
