import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../components/shared/user.model';
import { IUserLogin } from '../components/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../components/constants/urls';
import { ToastComponent } from '../components/partials/toast/toast.component';
import { ToastService, toastTypes } from './toast.service';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserToLocalStorage());
  public user$!: Observable<User>;

  constructor(private http: HttpClient, public toast: ToastService) {
    this.user$ = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toast.openToast({
            message: 'Vous êtes connecté.',
            type: toastTypes.success,
          });
        },
        error: (errorResponse) => {
          this.toast.openToast({
            message: errorResponse.error,
            type: toastTypes.success,
          });
        }
      })
    );
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserToLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) { return JSON.parse(userJson) as User};
    return new User();
  }
}
