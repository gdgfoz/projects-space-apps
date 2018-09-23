import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectModel, ProjectService} from '../../shared';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'sa-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  public projectForm: FormGroup;
  public project: ProjectModel;
  public categories = ['Discovery'];
  public isNew = true;

  private subject: Subscription;

  constructor(
    private _service: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const slug = this._route.snapshot.params['slug'];

    this.buildForm();

    if (slug) {
      this.isNew = false;
      this._findProject(slug);
    } else {
      this.isNew = true;
    }
  }

  private buildForm() {
    this.projectForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl(''),
      cityName: new FormControl(''),
      category: new FormControl(''),
      challenge: new FormControl(''),
      site: new FormControl(''),
      repositoryUrl: new FormControl(''),
      thumb: new FormControl('/assets/images/default-bg.png'),
    });
  }

  private _findProject(slug) {
    this.subject = this._service.find(slug)
      .subscribe(result => {
        this.project = result;
        this.setProjectValues();
      });
  }

  setProjectValues() {
    this.projectForm.patchValue(this.project);
  }

  save() {
    if (this.isNew) {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this._service.create(this.projectForm.getRawValue())
      .then((p) => this._redirect(p.slug));
  }

  update() {
    this._service.update(this.projectForm.getRawValue())
      .then((p) => this._redirect(p.slug));
  }

  private _redirect(slug: string): void {
    this._router.navigateByUrl(`/projects/${slug}`);
  }
}
