import { Component } from '@angular/core';
import { OverviewSliderComponent } from './components/overview-slider/overview-slider.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [OverviewSliderComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
