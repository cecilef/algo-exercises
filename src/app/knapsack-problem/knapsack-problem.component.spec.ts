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

  it ('should return 20', (done) => {
    const result = component.fillKnapSack(
      [10, 20, 30, 40, 50, 60, 70],
      [10, 20, 30, 40, 50, 60, 70],
      20
  );
    expect(result).toEqual(20);
    done();
  });

  it('should return 180', (done) => {
    const result = component.fillKnapSack(
      [100, 160, 180, 40, 10, 6, 70],
      [1, 2, 30, 20, 50, 60, 70],
      20
    );
    expect(result).toEqual(180);
    done();
  });
});
