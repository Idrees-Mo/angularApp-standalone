import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl = '';
  store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({ url: this.apiUrl }));
  }
}
