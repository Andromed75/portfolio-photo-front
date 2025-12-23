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

  navLinks = [
    { label: 'Galeries', route: '/galleries' },
    { label: 'À propos', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];


constructor(public device: DeviceService) {}

  ngOnInit() {

  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  


}
