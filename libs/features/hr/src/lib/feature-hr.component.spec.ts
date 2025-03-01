import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureHrComponent } from './feature-hr.component';

describe('FeatureHrComponent', () => {
  let component: FeatureHrComponent;
  let fixture: ComponentFixture<FeatureHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureHrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
