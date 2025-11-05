import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertising } from './advertising';

describe('Advertising', () => {
  let component: Advertising;
  let fixture: ComponentFixture<Advertising>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advertising]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advertising);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
