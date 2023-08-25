import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/food.model';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL } from '../../constants/urls';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute, private cartService: CartService, private rooter: Router, private http: HttpClient) {
    let foods$: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) {
        foods$ = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        foods$ = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        foods$ = foodService.getAll();
      }
      
      foods$.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    });
  }

  ngOnInit(): void {

  }

  /* addToCart(foodId: number): void {
    if (this.http.get<Food>(FOODS_BY_ID_URL + foodId) !== undefined) {
      this.cartService.addToCart(this.foodService.getAll().find(food => food.id == foodId));
    }
  } */
}
