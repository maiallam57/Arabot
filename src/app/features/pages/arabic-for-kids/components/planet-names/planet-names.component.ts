import { Component } from '@angular/core';
import { TitleComponent } from "../../../../../shared/Components/UI/title/title.component";

@Component({
  selector: 'app-planet-names',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './planet-names.component.html',
  styleUrl: './planet-names.component.css'
})
export class PlanetNamesComponent {
  title: string = "Planet Names";

}
