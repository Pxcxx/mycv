import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Language {
  name?: string;
  level?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  constructor(private firestore: AngularFirestore) { }

  getLanguages(): Observable<Language[]> {
    return this.firestore.collection<Language>('languages').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => action.payload.doc.data() as Language);
      })
    );
  }
}
