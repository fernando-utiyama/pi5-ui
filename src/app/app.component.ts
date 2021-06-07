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
  <div class="container">
  <div class="content has-text-centered">
    <p>
      UNIVESP <a href="http://107.21.187.195:4200">EngLab</a>
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
