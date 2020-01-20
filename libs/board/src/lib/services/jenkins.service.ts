import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum JenkinJobResult {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Aborted = 'ABORTED'
}

export interface JenkinJobAction {
  building: boolean;
  result: JenkinJobResult;
}

export interface JenkinJob {
  name: string;
  url: string;
}

interface JenkinNode {
  jobs: JenkinJob[]
}

export type ProjectRun = any;
export type ProjectRunNode = any;

@Injectable({
  providedIn: 'root'
})
export class JenkinsService {

  private _endPoint = "http://ts1-infr-jenkins";

  constructor(
    private _httpClient: HttpClient
  ) {}

  private _getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user:password')
    });
  }

  public getJobs(): Observable<JenkinJob[]> {
    return this._httpClient.get<JenkinNode>(`${this._endPoint}/api/json`, {
      headers: this._getHeaders()
    }).pipe(
      map(result => {
        return (result && result.jobs) || [];
      })
    );
  }

  public getJobInfo(jobKey: string): Observable<JenkinJobAction> {
    return this._httpClient.get<JenkinJobAction>(`${this._endPoint}/job/${jobKey}/job/master/lastBuild/api/json`, {
      headers: this._getHeaders()
    });
  }

  public getJobRuns(jobKey: string): Observable<ProjectRun> {
    return this._httpClient.get<ProjectRun>(`${this._endPoint}/blue/rest/organizations/jenkins/pipelines/${jobKey}/branches/master/runs?limit=5`, {
      headers: this._getHeaders()
    });
  }

  public getJobRunNodes(jobKey: string, runKey: string): Observable<ProjectRunNode> {
    return this._httpClient.get<ProjectRunNode>(`${this._endPoint}/blue/rest/organizations/jenkins/pipelines/${jobKey}/branches/master/runs/${runKey}/nodes/`, {
      headers: this._getHeaders()
    });
  }

}
