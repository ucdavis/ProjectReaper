import React, { Dispatch, SetStateAction } from "react";
import { ActivityAction } from "./ActivityAction";
import { Activity, WorkItem } from "../types";

interface IProps {
  activity: Activity;
  adjustActivity: Dispatch<SetStateAction<Activity[]>>;
}

export const ActivityActionList = (props: IProps) => {
  let laborItems: WorkItem[] = [];
  let equipmentItems: WorkItem[] = [];
  let otherItems: WorkItem[] = [];

  props.activity.workItems.map((workItem) => {
    if (workItem.type === "labor") {
      laborItems.push(workItem);
    } else if (workItem.type === "equipment") {
      equipmentItems.push(workItem);
    } else if (workItem.type === "other") {
      otherItems.push(workItem);
    }
  });

  return (
    <div>
      <ActivityAction
        actionType="labor"
        fields={laborItems}
        activity={props.activity}
        adjustActivity={props.adjustActivity}
      />
      <br />
      <ActivityAction
        actionType="equipment"
        fields={equipmentItems}
        activity={props.activity}
        adjustActivity={props.adjustActivity}
      />
      <br />
      <ActivityAction
        actionType="other"
        fields={otherItems}
        activity={props.activity}
        adjustActivity={props.adjustActivity}
      />
      <br />
    </div>
  );
};
