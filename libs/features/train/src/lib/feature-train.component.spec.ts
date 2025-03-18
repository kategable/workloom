import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Training } from '@workloom/data-access-train';
import { of } from 'rxjs';
import { LibFeatureTrainComponent } from './feature-train.component';

describe('LibFeatureTrainComponent', () => {
  let component: LibFeatureTrainComponent;
  let fixture: ComponentFixture<LibFeatureTrainComponent>;
  let store: Store;

  const mockTrainings: Training[] = [
    {
      id: '1',
      name: 'Test Training',
      description: 'Test Description',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFeatureTrainComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(mockTrainings),
            dispatch: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(LibFeatureTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load trainings on init', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
