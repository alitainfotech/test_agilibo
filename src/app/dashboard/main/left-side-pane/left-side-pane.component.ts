import { Component } from '@angular/core';

@Component({
  selector: 'app-left-side-pane',
  templateUrl: './left-side-pane.component.html',
  styleUrls: ['./left-side-pane.component.css']
})
export class LeftSidePaneComponent {

  ngOnInit() {
    const startDateInput: any = document.getElementById('startDateInput');
    const endDateInput: any = document.getElementById('endDateInput');

    // Add event listeners to the input fields
    startDateInput.addEventListener('change', function (event: any) {
      const startDateValue = event.target.value;
      // Do something with the start date value
      console.log('Start Date changed:', startDateValue);
      // Call your function or perform actions based on the start date change
    });

    endDateInput.addEventListener('change', function (event: any) {
      const endDateValue = event.target.value;
      // Do something with the end date value
      console.log('End Date changed:', endDateValue);
      // Call your function or perform actions based on the end date change
    });
  }
  date: Date[] = [new Date(2023, 1, 5, 15, 20), new Date(2023, 6, 5, 22, 30)]
  startDate: Date | null = null;



}
