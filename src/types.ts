export type Action = {
  type: string,
  payload?: IStudentAction,
}

export interface INotifierStore {
  score: number;
  studentActions: IStudentAction[];
}

export interface IStudentAction {
  message: string;
  fee: number;
  taskId: number;
  sessionGuid: string;
  isTaskFinished: boolean;
  datetime?: number;
}

export interface AssociativeArray {
  [index: string]: (state: INotifierStore, action: Action) => INotifierStore
}

export interface IPrepared {
}

export interface IPreparedError extends IPrepared {
  err: string;
  fee: number;
}

export interface IPreparedMessage extends IPrepared{
  message: string;
}

export interface IResult {
  status: number;
  message: string;
}