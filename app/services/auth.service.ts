import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Profile } from '../profile';
import profile from '../db.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  profiles = profile;
  selectedProfile!: Profile ;
  constructor(private router: Router) { 
   
  }

  showDetails = new EventEmitter<{name  : string , id : number , description :string}>();
  getProfileDetails(): Observable<any> {
    return of(this.profiles);
    console.log(this.profiles)
  }
  
  showProfile(Profile:{name  : string , id : number , description :string}){
    this.showDetails.emit(Profile);
   
  }
  moveProfile(id:number){
    return of(this.profiles[id-1]);
    this.showDetails.emit(this.profiles[id]);
   }
}
