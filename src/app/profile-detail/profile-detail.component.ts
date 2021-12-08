import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService } from '../profile.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profile?: Profile;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }
  
  getProfile(): void {
    const tag = String(this.route.snapshot.paramMap.get('tag'));
    this.profileService.getProfile(tag)
      .subscribe(profile => this.profile = profile);
  }

  goBack(): void {
    this.location.back();
  }

}
