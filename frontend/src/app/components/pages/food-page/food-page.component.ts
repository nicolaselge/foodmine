import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/food.model';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(foodService: FoodService, activatedRoute: ActivatedRoute, private cartService: CartService, private rooter: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id) {
        foodService.getFoodById(params.id).subscribe(serverFood => {
          this.food = serverFood;
        });
      }
    });
  }

  ngOnInit(): void {

  }

  addToCart(): void {
    this.cartService.addToCart(this.food);
    this.rooter.navigateByUrl('/cart-page');
  }
}
