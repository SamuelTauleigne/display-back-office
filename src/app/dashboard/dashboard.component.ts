import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  profiles: Profile[] = [];

  numberOfTopProfiles: number = 2;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles.slice(0, this.numberOfTopProfiles));
  }
}