import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibFeatureHrComponent } from './lib-feature-hr.component';

describe('LibFeatureHrComponent', () => {
  let component: LibFeatureHrComponent;
  let fixture: ComponentFixture<LibFeatureHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFeatureHrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibFeatureHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
