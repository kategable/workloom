import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibFeaturesHrComponent } from './lib-features-hr.component';

describe('LibFeaturesHrComponent', () => {
  let component: LibFeaturesHrComponent;
  let fixture: ComponentFixture<LibFeaturesHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFeaturesHrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibFeaturesHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
