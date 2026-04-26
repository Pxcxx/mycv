import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Skill {
  name?: string;
  percentage?: number;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private firestore: AngularFirestore) { }

  getSkills(): Observable<Skill[]> {
    return this.firestore.collection<Skill>('skills').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => action.payload.doc.data() as Skill);
      })
    );
  }
}
