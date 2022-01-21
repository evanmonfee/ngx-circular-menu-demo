import { Component, OnInit } from '@angular/core';
import { MenuItemsModel } from 'ngx-circular-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'radial-menu';

  menuItemsModel: MenuItemsModel;

  ngOnInit(){
    this.setRadialMenu();
  }

  setRadialMenu() {
    this.menuItemsModel = new MenuItemsModel(
      "Dashboard", 'assets/icons/icn_drawdowns.svg',
      "Search", 'assets/icons/icn_search_white.svg',
      "Wishlist", 'assets/icons/icn_to-do-list.svg',
      "Logout", 'assets/icons/logout.svg'
    );
  }

  goToDashboard() {
    console.log('goToDashboard clicked..');
  }
  goToSearch() {
    console.log('goToSearch clicked..');
  }
  goToWishlist() {
    console.log('goToWishlist clicked..');
  }
  goToLogout() {
    console.log('goToLogout clicked..');
  }


}
