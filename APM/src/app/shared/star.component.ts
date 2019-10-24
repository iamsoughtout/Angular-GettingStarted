import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
 starWidth: number;
 @Input() rating: number;

@Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();

onClick() {
  // this.notify.emit('clicked!');
  this.ratingClicked.emit(`This rating ${this.rating} was clicked`);
  }

ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
