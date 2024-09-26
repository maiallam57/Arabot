import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/Components/navbar/navbar.component";
import { FooterComponent } from "./shared/Components/footer/footer.component";
import { FlowbiteService } from './shared/services/flowbite/flowbite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Arabot';
  constructor(private _flowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
    });
  }
}
