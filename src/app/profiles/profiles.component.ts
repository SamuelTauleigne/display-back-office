import { Component, OnInit } from '@angular/core';

import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);
  }

}
