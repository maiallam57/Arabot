import { Component } from '@angular/core';
import { OverviewSliderComponent } from './components/overview-slider/overview-slider.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../../shared/Components/footer/footer.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [OverviewSliderComponent, RouterLink, FooterComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
