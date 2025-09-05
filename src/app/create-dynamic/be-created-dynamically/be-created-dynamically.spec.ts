import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeCreatedDynamically } from './be-created-dynamically';

describe('BeCreatedDynamically', () => {
  let component: BeCreatedDynamically;
  let fixture: ComponentFixture<BeCreatedDynamically>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeCreatedDynamically]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeCreatedDynamically);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
