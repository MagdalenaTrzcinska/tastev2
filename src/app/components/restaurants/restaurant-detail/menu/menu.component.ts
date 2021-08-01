import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../restaurant.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() dish: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
