import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../../../shared';

@Component({
  selector: 'sa-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {

  @Input() project: ProjectModel;

  constructor() {
  }

  ngOnInit() {
  }

}
