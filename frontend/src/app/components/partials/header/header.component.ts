import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isList!: number;
  isMenu: boolean = false;
  isSearch: boolean = false;

  cartQuantity: number = 0;

  mobileMenu: boolean = true;
  mobileMenuBtn() {
      this.mobileMenu = !this.mobileMenu;
  }

  dropdownHandler(element: Element) {
    element.children[0].classList.toggle('hidden');
  }

  constructor(carteService: CartService) {
    carteService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {}
}
