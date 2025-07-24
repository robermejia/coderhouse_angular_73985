import { Component } from '@angular/core';
import { Abuelo } from "./abuelo/abuelo";

@Component({
  selector: 'app-root',
  imports: [Abuelo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'componente_ejemplo';
}
