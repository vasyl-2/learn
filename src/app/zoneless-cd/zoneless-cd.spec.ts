import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessCd } from './zoneless-cd';

describe('ZonelessCd', () => {
  let component: ZonelessCd;
  let fixture: ComponentFixture<ZonelessCd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessCd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessCd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
