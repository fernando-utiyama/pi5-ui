import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <nav class="navbar">

    <!-- logo -->
    <div class="navbar">
      <a class="navbar-item">
        <img src='/assets/EngLabs.jpeg'>
      </a>
    </div>
  </nav>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <footer class="footer">
  <div class="footer">
  <div class="content has-text-centered">
    <p> <img src='/assets/logo-univesp.png'><a href="http://univesp-campinas-pi5-ui.herokuapp.com/">EngLabs</a>
    </p>
  </div>
  </div>
  </footer>
`,


  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi5-ui';
}
