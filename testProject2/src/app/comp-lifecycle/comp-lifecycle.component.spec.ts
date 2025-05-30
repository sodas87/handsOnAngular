import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLifecycleComponent } from './comp-lifecycle.component';

describe('CompLifecycleComponent', () => {
  let component: CompLifecycleComponent;
  let fixture: ComponentFixture<CompLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompLifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
