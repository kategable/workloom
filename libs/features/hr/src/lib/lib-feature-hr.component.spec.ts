
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LibFeatureHrComponent } from './lib-feature-hr.component';
import { employeeViewModels } from '@workloom/lib-data-access-hr';

describe('LibFeatureHrComponent', () => {
  let component: LibFeatureHrComponent;
  let fixture: ComponentFixture<LibFeatureHrComponent>;
  let store: MockStore;
  const initialState = { loading: false, employees: [] } as any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFeatureHrComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
   store.overrideSelector(employeeViewModels, [
     {
       id: 123,
       name: 'first name',
     },
   ]);
    fixture = TestBed.createComponent(LibFeatureHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
