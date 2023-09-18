import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface GetFeedResponse {
  articles: ArticleInterface[];
  articlesCount: number;
}
