import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
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

  async update(value: BombasDeCalor): Promise<void> {
    const postRef: DocumentReference<DocumentData> = doc(
      this.firestore,
      `bombasDeCalor/${value.id}`
    );

    const { id, ...postData } = value;
    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      return updateDoc(postRef, postData);
    } else {
      throw new Error('Post não encontrado');
    }
  }

  async delete(id: string): Promise<void> {
    const postRef: DocumentReference<DocumentData> = doc(
      this.firestore,
      `bombasDeCalor/${id}`
    );

    const postSnapshot = await getDoc(postRef);

    if (postSnapshot.exists()) {
      return deleteDoc(postRef);
    } else {
      throw new Error('Post não encontrado');
    }
  }
}
