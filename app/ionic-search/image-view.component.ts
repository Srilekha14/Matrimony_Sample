import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Profile } from '../profile';
import profile from '../db.json';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class IonicSearch {

  @Input() uname: any;
  profiles = profile;
  name: string = '';
  profileForm: FormGroup;
  Total = this.profiles.length;


  constructor(private router: Router, private element: ElementRef,
    public authservice: AuthService, private cf: ChangeDetectorRef) {
    this.authservice.getProfileDetails().subscribe((data) => {
      this.profiles = data;
      console.log(this.profiles)
    });
    this.profileForm = new FormGroup({
      id: new FormControl(),
    });
  }

  yesbtn(profile: Profile) {
    this.authservice.showProfile(profile);
    this.authservice.selectedProfile = profile;
    this.router.navigate(['/view', profile.id, profile.name]);

  }

  nobtn(profile: Profile) {
    this.authservice.showProfile(profile);
    this.authservice.selectedProfile = profile;
    this.router.navigate(['/swipe', profile.id, profile.name]);
  }

}
