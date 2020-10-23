export type ActionType = {
  id: number;
  name: string;
};

export type MeasurementUnit = {
  id: number;
  name: string;
};

export type Action = {
  id: number;
  type: ActionType;
  name: string;
  unit: MeasurementUnit;
};

export type WorkItem = {
  id: string;
  action: Action;
  quantity: number;
};

export type Activity = {
  workItems: WorkItem[];
}