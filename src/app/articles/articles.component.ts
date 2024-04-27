import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  private readonly scullyRoutesService = inject(ScullyRoutesService);
  posts$: Observable<ScullyRoute[] | undefined> = this.scullyRoutesService.available$.pipe(
    map((posts: ScullyRoute[]) => posts.filter((post: ScullyRoute) => post.title))
  );

};
