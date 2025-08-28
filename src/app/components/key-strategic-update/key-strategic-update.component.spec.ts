import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyStrategicUpdateComponent } from './key-strategic-update.component';

describe('KeyStrategicUpdateComponent', () => {
  let component: KeyStrategicUpdateComponent;
  let fixture: ComponentFixture<KeyStrategicUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyStrategicUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyStrategicUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
