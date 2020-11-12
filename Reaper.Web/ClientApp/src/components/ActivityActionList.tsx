import React, { Dispatch, SetStateAction } from "react";
import { ActivityAction } from "./ActivityAction";
import { WorkItem } from "../types";

interface IProps {
  workItems: WorkItem[];
  adjustWorkItems: Dispatch<SetStateAction<WorkItem[]>>;
}

export const ActivityActionList = (props: IProps) => {
  let laborItems: WorkItem[] = [];
  let equipmentItems: WorkItem[] = [];
  let otherItems: WorkItem[] = [];

  props.workItems.map((workItem) => {
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
        workItems={props.workItems}
        adjustWorkItems={props.adjustWorkItems}
      />
      <br />
      <ActivityAction
        actionType="equipment"
        fields={equipmentItems}
        workItems={props.workItems}
        adjustWorkItems={props.adjustWorkItems}
      />
      <br />
      <ActivityAction
        actionType="other"
        fields={otherItems}
        workItems={props.workItems}
        adjustWorkItems={props.adjustWorkItems}
      />
      <br />
    </div>
  );
};
