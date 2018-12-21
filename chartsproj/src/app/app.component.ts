import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Pie Chart"

  constructor (private httpService: HttpClient) { }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

  // OBJECT FOR datasets WITH EMPTY data.
  chartData = [
    {
      label: 'Base',
      data: [], 
    },
    { 
      label: 'Current',
      data: []
    }
   ];

   // CHART COLOR.
   colors = [
    { // 1st Year.
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',

    ],
      
    },
    { // 2nd Year.
      backgroundColor: [
        'rgba(255, 159, 64)',
        'rgba(75, 192, 192)',
        'rgba(75, 192, 192)',
        'rgba(255, 206, 86)',
        'rgba(54, 162, 235)',
        'rgba(255, 99, 132)',

      ]
    }
   ]
  
    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
        data => {
            this.chartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
        );
    }

  onChartClick(event) {
    console.log(event);
  }
}


