import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSidebar = true;
  isHandset = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(Breakpoints.Handset).subscribe((res) => {
      this.isHandset = res.matches;
      this.showSidebar = !res.matches;
    });
  }
  /**
   * showing and hiding the sidebar with the monitoring services 
   */
  onToggleSidebar() {
    this.showSidebar = !this.showSidebar;
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
