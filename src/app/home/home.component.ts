import { Component, OnInit } from '@angular/core';
import {MatrixFillerService} from "../services/matrix-filler/matrix-filler.service";
import {generate} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private matrixFillerService:MatrixFillerService) {

  }

  ngOnInit(): void {
    const matrix1 = this.matrixFillerService.generate(2,2);
    const matrix2 = this.matrixFillerService.generate(2,2);
    console.log(matrix1, matrix2);

    console.log(this.matrixFillerService.sum(matrix1,matrix2));
  }

}
