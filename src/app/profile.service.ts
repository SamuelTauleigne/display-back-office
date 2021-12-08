import { Injectable } from '@angular/core';

import { Profile } from './profile';
import { PROFILES } from './mock-profiles';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private messageService: MessageService) { }

  getProfiles(): Observable<Profile[]> {
    const profiles = of(PROFILES);
    this.messageService.add('ProfileService: fetched profiles');
    return profiles;
  }

  getProfile(tag: String): Observable<Profile> {
    // For now, assume that a profile with the specified `tag` always exists.
    // Error handling will be added in the next steps.
    const profile = PROFILES.find(h => h.tag === tag)!;
    this.messageService.add(`ProfileService: fetched profile tag=${tag}`);
    return of(profile);
  }

}
