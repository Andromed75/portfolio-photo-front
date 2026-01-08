import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../service/device.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
isMenuOpen = false;

isScrolled = false;
isMobile = false;

  navLinks = [
    { label: 'Galeries', route: '/galleries' },
    { label: 'À propos', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];


constructor(public device: DeviceService) {

}

  ngOnInit() {
    this.device.isMobile$.subscribe(x => {
      this.isMobile = x;
      console.log(this.isMobile);
      
    });

  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  


}
