// Third parties modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Own modules
import { CoreModule } from '../../core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';

// Own components
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, CoreModule, SharedModule],
})
export class DashboardModule {}
