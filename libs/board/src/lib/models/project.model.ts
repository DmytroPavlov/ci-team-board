export enum ProjectStatus {
  Success,
  Failed,
  Canceled,
  Running
};

export class Project {
  public id = Math.random();
  public name = '';
  public status: ProjectStatus = ProjectStatus.Failed;
  public key = '';
}
