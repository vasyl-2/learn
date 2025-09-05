import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDynamic } from './create-dynamic';

describe('CreateDynamic', () => {
  let component: CreateDynamic;
  let fixture: ComponentFixture<CreateDynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDynamic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDynamic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
