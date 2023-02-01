import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveServiceComponent } from './remove-service.component';

describe('RemoveServiceComponent', () => {
  let component: RemoveServiceComponent;
  let fixture: ComponentFixture<RemoveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
