import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: ` <i [class]="'icon fas fa-' + icon"></i> `,
  styleUrls: ['./icon.component.sass'],
})
export class IconComponent implements OnInit {
  @Input() icon: string;

  constructor() {}

  ngOnInit(): void {}
}
