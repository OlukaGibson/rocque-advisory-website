
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../pages/home/home.component';
import { ServicesComponent } from '../pages/services/services.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { ValuesComponent } from '../pages/values/values.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { COMPANY_NAME } from '../shared/constants';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ProjectsComponent,
    ValuesComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal(`${COMPANY_NAME} - Advisory Services`);
}
