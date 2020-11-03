import * as React from "react";
import { ActivityAction } from "./ActivityAction";

export const ActivityActionList = () => {
  return (
    <div>
      <ActivityAction actionType="Labor" />
      <br />
      <ActivityAction actionType="Equipment" />
      <br />
      <ActivityAction actionType="Other" />
      <br />
    </div>
  );
};
