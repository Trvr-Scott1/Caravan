import { Component, OnInit } from '@angular/core';
import { Group } from './group';
import { GROUPS } from '../mock-groups';
import { GroupsService } from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  providers: [ GroupsService ],
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Group[];
  // editGroup: Group; // the hero currently being edited

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    console.log('initializing groups');
    this.getGroups();
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .subscribe(groups => {
        console.log('getting groups', groups);
        this.groups = groups;
      });
  }

}
