import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixFillerService {

  constructor() {

  }

  public generate(column:number, row:number) {
    const matrix = [];

    for (let i = 1; i <= row; i++) {
     const temp =[];
     for (let y = 1; y <= column; y++) {
       const item = Math.floor(Math.random() * 100);
       temp.push(item);

     }

     matrix.push(temp);
    }

    return matrix;
  }

  public sum(matrix1:number[][],matrix2:number[][]) {
    const resultMatrix = [];

    for (let i = 0; i < matrix1.length; i++) {
      const temp =[];
      for (let y = 0; y < matrix1[i].length; y++) {
        const item = matrix1[i][y] + matrix2[i][y];
        temp.push(item);

      }
      resultMatrix.push(temp);
    }

    return resultMatrix;

  }

}
