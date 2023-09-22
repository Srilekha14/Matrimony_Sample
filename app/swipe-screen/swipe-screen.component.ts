import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Profile } from '../profile';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-swipe-screen',
  templateUrl: './swipe-screen.component.html',
  styleUrls: ['./swipe-screen.component.scss']
})
export class SwipeScreenComponent {
  profile!: { name: string; id: number };
  name!: string;
  description?: string;
  profiles!: Profile;

  constructor(private activatedRoute: ActivatedRoute, private authservice: AuthService,
    private router: Router, private toast: NgToastService) {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.profile = {
        name: data['name'],
        id: data['id']
      }
    });
    this.description = this.authservice.selectedProfile?.description;
    this.authservice.showDetails.subscribe((data: { name: string, id: number, description: string }) => {
      this.name = data.name;
      this.description = data.description;
    });

  }


  ngOnInit() {

  }

  shortlist(id: number) {
    alert("Shortlisted");
    let num = +id + 1;
    this.authservice.selectedProfile.id = num;
    this.authservice.moveProfile(this.authservice.selectedProfile.id).subscribe((data: { name: string, id: number, description: string }) => {
      this.name = data.name;
      this.description = data.description;
    });

    this.router.navigate(['/swipe', this.authservice.selectedProfile.id, this.name]);
  }

  tick(id: number) {
    alert("Interested");
    let num = +id + 1;
    this.authservice.selectedProfile.id = num;
    this.authservice.moveProfile(this.authservice.selectedProfile.id).subscribe((data: { name: string, id: number, description: string }) => {
      this.name = data.name;
      this.description = data.description;
    });
    this.router.navigate(['/swipe', this.authservice.selectedProfile.id, this.name]);
  }

  cancel(id: number) {
    alert("Not Interested");
    let num = +id + 1;
    this.authservice.selectedProfile.id = num;
    this.authservice.moveProfile(this.authservice.selectedProfile.id).subscribe((data: { name: string, id: number, description: string }) => {
      this.name = data.name;
      this.description = data.description;
    });
    this.router.navigate(['/swipe', this.authservice.selectedProfile.id, this.name]);
  }
}

