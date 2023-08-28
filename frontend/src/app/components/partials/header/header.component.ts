import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../shared/user.model';

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
  user!: User;

  mobileMenu: boolean = true;
  mobileMenuBtn() {
      this.mobileMenu = !this.mobileMenu;
  }

  dropdownHandler(element: Element) {
    element.children[2].classList.toggle('hidden');
  }

  constructor(carteService: CartService,private userService: UserService) {
    carteService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.user$.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
