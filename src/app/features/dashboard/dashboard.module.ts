// Third parties modules
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

// Own modules
import { DashboardRoutingModule } from './dashboard-routing.module';

// Own components
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MatIconModule],
})
export class DashboardModule {}
