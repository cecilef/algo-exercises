import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KnapsackProblemComponent} from './knapsack-problem.component';

describe('KnapsackProblemComponent', () => {
  let component: KnapsackProblemComponent;
  let fixture: ComponentFixture<KnapsackProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KnapsackProblemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnapsackProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 220', (done) => {
    const result = component.fillKnapSack([60, 100, 120], [10, 20, 30], 50);
    expect(result).toEqual(220);
    done();
  });

  it('should return 0', (done) => {
    const result = component.fillKnapSack([], [12, 23, 34], 50);
    expect(result).toEqual(0);
    done();
  });

  it('should return 0', (done) => {
    const result = component.fillKnapSack([12, 23, 34], [], 50);
    expect(result).toEqual(0);
    done();
  });
});
