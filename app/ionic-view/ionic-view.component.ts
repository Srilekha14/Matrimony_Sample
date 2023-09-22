import { ChangeDetectorRef, Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Profile } from '../profile';

import profile from '../db.json';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ionic-view',
  templateUrl: './ionic-view.component.html',
  styleUrls: ['./ionic-view.component.scss']
})
export class IonicViewComponent {
  profile!: { name: string; id: number };
  description?: string;

  constructor(private activatedRoute: ActivatedRoute, private authservice: AuthService,
    private cf: ChangeDetectorRef) {
    this.activatedRoute.params.subscribe((data: Params) => {
      this.profile = {
        name: data['name'],
        id: data['id']
      }
    });
    this.description = this.authservice.selectedProfile?.description;
    this.authservice.showDetails.subscribe((data: { name: string, id: number, description: string }) => {
      this.description = data.description;
    });
  }


  ngOnInit() {

  }



  verified() { }
  tick() { }
  cancel() { }
}
