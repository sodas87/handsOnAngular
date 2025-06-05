import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutChildSetterComponent } from './in-out-child-setter.component';

describe('InOutChildSetterComponent', () => {
  let component: InOutChildSetterComponent;
  let fixture: ComponentFixture<InOutChildSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InOutChildSetterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOutChildSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
