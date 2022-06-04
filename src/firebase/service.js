import {db} from './firebase'
import firebase from 'firebase/compat/app';

export const addDocument = (collection, data) => {
    const query = db.collection(collection)

    query.add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
}