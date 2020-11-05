import React, { Dispatch, SetStateAction } from "react";
import { ActivityAction } from "./ActivityAction";

interface IProps {
  laborTotal: number;
  equipmentTotal: number;
  otherTotal: number;
  laborChange: Dispatch<SetStateAction<number>>;
  equipmentChange: Dispatch<SetStateAction<number>>;
  otherChange: Dispatch<SetStateAction<number>>;
}

export const ActivityActionList = (props: IProps) => {
  return (
    <div>
      <ActivityAction
        actionType="Labor"
        activityTotal={props.laborTotal}
        activityTotalChange={props.laborChange}
      />
      <br />
      <ActivityAction
        actionType="Equipment"
        activityTotal={props.equipmentTotal}
        activityTotalChange={props.equipmentChange}
      />
      <br />
      <ActivityAction
        actionType="Other"
        activityTotal={props.otherTotal}
        activityTotalChange={props.otherChange}
      />
      <br />
    </div>
  );
};
