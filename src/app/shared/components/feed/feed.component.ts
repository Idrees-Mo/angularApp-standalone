import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/reducer';
import { RouterModule } from '@angular/router';
import { errorMessageComponent } from '../errorMessge/errorMessage.component';
import { loadingComponent } from '../loading/loading.component';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    errorMessageComponent,
    loadingComponent,
  ],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl = '';
  private store = inject(Store); // another way of dependency injection

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  });

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }));
  }
}
