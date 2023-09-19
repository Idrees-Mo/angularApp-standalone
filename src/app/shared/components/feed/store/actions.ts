import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetFeedResponseInterface } from 'src/app/shared/components/feed/types/getFeedResponse.interface';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed Success': props<{ feed: GetFeedResponseInterface }>(),
    'Get feed Fail': emptyProps(),
  },
});
