import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knapsack-problem',
  templateUrl: './knapsack-problem.component.html',
  styleUrls: ['./knapsack-problem.component.css']
})
export class KnapsackProblemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fillKnapSack(values: number[], weights: number[], capacity: number): number {
    if (values.length === 0 || weights.length === 0) return 0;
    if (capacity === undefined || capacity === 0) return 0;
    if (values.length !== weights.length) return 0;

    let weight = 0;
    let sum = 0;
    for (let i = 0;  i < values.length ; i++) {
      if (weight + weights[i] <= capacity) {
        weight += weights[i];
        sum += values[i];
      }
      for (let j = 0; j < values.length ; j++) {
        if (i !== j) {
          if (weight + weights[j] <= capacity) {
            weight += weights[j];
            sum += values[j];
          }
        }
      }
    }

    return sum;
  }
}
