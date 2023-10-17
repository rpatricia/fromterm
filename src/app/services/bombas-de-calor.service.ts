import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  getDocs,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BombasDeCalor } from '../models/BombasDeCalor.model';

@Injectable({
  providedIn: 'root',
})
export class BombasDeCalorService {
  private firestore: Firestore = inject(Firestore);
  bombasDeCalor$!: Observable<BombasDeCalor[]>;
  bombasDeCalorCollection!: CollectionReference;

  constructor() {
    this.bombasDeCalorCollection = collection(this.firestore, 'bombasDeCalor');
    this.bombasDeCalor$ = collectionData(
      this.bombasDeCalorCollection
    ) as Observable<BombasDeCalor[]>;
  }

  addBombaDeCalor(value: BombasDeCalor) {
    addDoc(this.bombasDeCalorCollection, value);
  }

  async getAll() {
    return getDocs(this.bombasDeCalorCollection).then((querySnapshot) => {
      const bombasDeCalor: BombasDeCalor[] = [];
      querySnapshot.forEach((doc) => {
        const bombaDeCalor: BombasDeCalor = {
          id: doc.id,
          ...(doc.data() as BombasDeCalor),
        };
        bombasDeCalor.push(bombaDeCalor);
      });
      return bombasDeCalor;
    });
  }
}
