import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth : AngularFireAuth
  ) { }


//
SignIn (email, password) {
  return this.afAuth
  .signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log(result);
    
  })
  .catch((error) => {
    window.alert (error.message)
  });
}

//

GoogleAuth() {
  return this.PopupLogin(new GoogleAuthProvider)
}



PopupLogin(provider) {
  return this.afAuth
  .signInWithPopup(provider)
  .then(() => {
    window.alert("hai loggato con successo");
    
  }).catch((error) => {
    window.alert (error.message)
  });
}


Logout() {
  return this.afAuth.signOut().then(() => {
    window.alert('Hai effettuato il logout con successo!');

  });
}




}
