import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectModel, ProjectService} from '../../../shared';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sa-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss']
})
export class ProjectSingleComponent implements OnInit, OnDestroy {

  public project: ProjectModel;
  private subject: Subscription;

  constructor(
    private _service: ProjectService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {

    const slug = this._route.snapshot.params['slug'];

    this.subject = this._service.find(slug)
      .subscribe(result => this.project = result);

  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
