import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogType } from 'logging-format';
import GenericIssueCreator from 'src/app/models/generic-issue-creator.model';
import { MonitoringSelectionService } from 'src/app/monitoring-selection/monitoring-selection.service';
import { IssueCreatorService } from '../issue-creator.service';

@Component({
  selector: 'app-issue-creator-edit',
  templateUrl: './issue-creator-edit.component.html',
  styleUrls: ['./issue-creator-edit.component.scss']
})
export class IssueCreatorEditComponent implements OnInit {

  public LogType = LogType;

  issueCreator: GenericIssueCreator;

  constructor(
    private activeRoute: ActivatedRoute,
    private issueCreatorService: IssueCreatorService,
    public serviceRegistration: MonitoringSelectionService,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params["id"];
    if (!id) {
      this.issueCreator = new GenericIssueCreator();
    } else {
      this.issueCreatorService.getIssueCreator(id).then(res => this.issueCreator = res);
    }
  }

  onSave() {
    if (!this.issueCreator._id) {
      this.issueCreatorService.addIssueCreator(this.issueCreator);
    } else {
      this.issueCreatorService.editIssueCreator(this.issueCreator);
    }
    this.router.navigateByUrl("/issue-creator")
  }

  // /**
  //  * Retrieves the name of a registered service by its url
  //  * 
  //  * @param url of a service
  //  * @returns name of service with the given url
  //  */
  // getServiceNameFromUrl(url: string) {
  //   const service = this.monitoringService.getServiceByUrl(url);
  //   return service ? service.name : url;
  // }
}


