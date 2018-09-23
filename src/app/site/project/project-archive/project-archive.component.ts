import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectModel, ProjectService} from '../../../shared';
import {Subscription} from 'rxjs';

@Component({
  selector: 'sa-project-archive',
  templateUrl: './project-archive.component.html',
  styleUrls: ['./project-archive.component.scss']
})
export class ProjectArchiveComponent implements OnInit, OnDestroy {
  userName = '';
  public projects: ProjectModel[] = [];
  private subject: Subscription;

  constructor(private _service: ProjectService) {
  }

  ngOnInit() {

    this.subject = this._service.all()
      .subscribe(results => this.projects = results);

  }

  search(ev){
    console.log('ev', ev)
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
