import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import GenericIssueCreator from '../models/generic-issue-creator.model';

@Injectable({
  providedIn: 'root'
})
export class IssueCreatorService {

  private readonly issueCreatorUrl = `${environment.BACKEND_ISSUE_CREATOR_URL}generic-issue-creator`

  genericIssueCreators: GenericIssueCreator[] = [];
  genericIssueCreatorsSubject = new BehaviorSubject<GenericIssueCreator[]>([]);

  constructor(private http: HttpClient) {}

  getIssueCreators() {
    this.http.get(`${this.issueCreatorUrl}/all`).subscribe(res => {
      this.genericIssueCreators = res as GenericIssueCreator[];
      this.genericIssueCreatorsSubject.next(this.genericIssueCreators);
    })
  }
  
  addIssueCreator(creator: GenericIssueCreator) {
    this.http.post(`${this.issueCreatorUrl}`, creator).subscribe(res => {
      this.genericIssueCreators.push(res as GenericIssueCreator);
      this.genericIssueCreatorsSubject.next(this.genericIssueCreators);
    })
  }

  editIssueCreator(creator: GenericIssueCreator) {
    this.http.post(`${this.issueCreatorUrl}/edit`, creator).subscribe(res => {
      const index = this.genericIssueCreators.findIndex((c) => c._id == creator._id);
      this.genericIssueCreators[index] = res as GenericIssueCreator;
      this.genericIssueCreatorsSubject.next(this.genericIssueCreators);
    })
  }

  async getIssueCreator(id): Promise<GenericIssueCreator> {
    const res = await this.http.get(`${this.issueCreatorUrl}/${id}`).toPromise() as GenericIssueCreator;
    console.log(res);
    return res;
  }
}
