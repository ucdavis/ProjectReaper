import { Duration } from 'date-fns';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TimeSheets: { timeSheets: TimeSheet[] };
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type TimeSheetsParamList = {
  TimeSheetsScreen: { timeSheets: TimeSheet[] };
  TimeSheetDetails: { timeSheet: TimeSheet };
};

export type ActionType  = {
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
  unit: MeasurementUnit
};

export type WorkItem = {
  id: string;
  action: Action;
  quantity: number;
};

export type Location = {
  id: number;
  name: string;
  unit: MeasurementUnit; // just in case an area is measured in something other than acres
  size: number;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  locations: Location[];
};

export type TimeSheet = {
  id: string;
  location: Location;
  project: Project;
  workItems: WorkItem[];
};
