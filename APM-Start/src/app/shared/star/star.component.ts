import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit('clicked!');
  }
}