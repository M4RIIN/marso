import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { API_BASE_URL } from '../app.tokens';

interface NameResponse {
  name: string;
}

@Injectable({ providedIn: 'root' })
export class NameService {
  private readonly http = inject(HttpClient);
  private readonly apiBase = (inject(API_BASE_URL, { optional: true }) ?? '').replace(/\/$/, '');

  readonly name$ = this.http
    .get<NameResponse>(this.createEndpoint('/api/name'))
    .pipe(
      map((response) => response.name),
      shareReplay({ bufferSize: 1, refCount: true })
    );

  private createEndpoint(path: string): string {
    if (!this.apiBase) {
      return path;
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.apiBase}${normalizedPath}`;
  }
}
