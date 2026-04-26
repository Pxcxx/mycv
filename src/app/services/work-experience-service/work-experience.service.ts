import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface WorkExperience {
  company?: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  responsibilities?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  constructor(private firestore: AngularFirestore) { }

  getWorkExperiences(): Observable<WorkExperience[]> {
    return this.firestore.collection<WorkExperience>('work-experience').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => action.payload.doc.data() as WorkExperience);
      })
    );
  }
}
