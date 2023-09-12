import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/actions';
import { selectCurrentUser } from './auth/store/reducers';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, NavbarComponent],
})
export class AppComponent implements OnInit {
  currentUser$ = this.store.select(selectCurrentUser);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());
    this.currentUser$.subscribe((data) => {
      console.warn(data);
    });
  }
}
