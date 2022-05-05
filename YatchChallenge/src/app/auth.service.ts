import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData : any;
  constructor(
    public afs: AngularFirestore, //Firestore Service
    public afAuth : AngularFireAuth, //Firebase auth service
    public router : Router,
    public ngZone : NgZone
  ) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  
  
  
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  
  
  
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





  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
    }


    ForgotPassword(passwordResetEmail: string) {
      return this.afAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          window.alert('Password reset email sent, check your inbox.');
        })
        .catch((error) => {
          window.alert(error);
        });
      }



}
