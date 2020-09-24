import { Component, OnInit } from '@angular/core';
import { IssueCreatorService } from '../issue-creator.service';

@Component({
  selector: 'app-issue-creator-list',
  templateUrl: './issue-creator-list.component.html',
  styleUrls: ['./issue-creator-list.component.scss']
})
export class IssueCreatorListComponent implements OnInit {

  constructor(public issueCreatorService: IssueCreatorService) { }

  ngOnInit(): void {
    this.issueCreatorService.getIssueCreators();
  }

}
