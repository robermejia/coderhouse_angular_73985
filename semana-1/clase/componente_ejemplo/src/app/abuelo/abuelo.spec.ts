import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abuelo } from './abuelo';

describe('Abuelo', () => {
  let component: Abuelo;
  let fixture: ComponentFixture<Abuelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abuelo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abuelo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
