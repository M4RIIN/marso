import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { NameService } from './services/name.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: NameService,
          useValue: {
            name$: of('Alexandre'),
          },
        },
      ],
    }).compileComponents();
  });

  it('should render the hero name from the API response', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__content h1')?.textContent).toContain(
      'Alexandre'
    );
  });
});
