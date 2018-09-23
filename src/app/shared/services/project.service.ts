import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {ProjectModel} from '..';
import {projectData} from '../data/projectData';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _db: AngularFirestore) {
  }

  all(): Observable<ProjectModel[]> {
    return this._db.collection<ProjectModel>('projects').valueChanges();
    // return of(projectData);
  }

  find(slug: any): Observable<ProjectModel> {
    return this._db.doc<ProjectModel>(`projects/${slug}`).valueChanges();
    // const r = projectData.find(p => p.slug === slug);
    // return of(r);
  }

  update(proj: ProjectModel): Promise<ProjectModel> {
    return this._db.doc<ProjectModel>(`projects/${proj.slug}`)
      .update(proj)
      .then(() => {
        return proj;
      });
  }

  create(proj: ProjectModel): Promise<ProjectModel> {

    if (!proj.slug) {
      proj.slug = this._strToSlug(proj.title);
    }

    // TODO check has used slug

    return this._db.collection<ProjectModel>('projects')
      .doc(proj.slug)
      .set(proj)
      .then(() => {
        return proj;
      });
  }

  private _strToSlug(title: string, separator: string = '-') {

    // Convert all dashes/underscores into separator
    const flip = separator === '-' ? '_' : '-';
    title = title.replace(flip, separator);

    // Remove all characters that are not the separator, letters, numbers, or whitespace.
    title = title.toLowerCase()
      .replace(new RegExp('[^a-z0-9' + separator + '\\s]', 'g'), '');

    // Replace all separator characters and whitespace by a single separator
    title = title.replace(new RegExp('[' + separator + '\\s]+', 'g'), separator);

    return title.replace(new RegExp('^[' + separator + '\\s]+|[' + separator + '\\s]+$', 'g'), '');
  }
}
