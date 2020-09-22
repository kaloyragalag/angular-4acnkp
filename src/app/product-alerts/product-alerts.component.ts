import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Output() notif = new EventEmitter(); //Allows to emit an event when the value of the notif property changes.
  @Input() product;// indicates that the property value passes in from the component's parent
  constructor() { }

  ngOnInit() {
  }

}