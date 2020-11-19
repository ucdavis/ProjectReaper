import React, { Dispatch, SetStateAction } from "react";
import { ActivityActionList } from "./ActivityActionList";
import { Form } from "reactstrap";
import { Activity } from "../types";

interface IProps {
  activity: Activity;
  adjustActivity: Dispatch<SetStateAction<Activity[]>>;
}

export const ActivityCard = (props: IProps) => {
  return (
    <div>
      <h5>Apple Harvest</h5>
      <hr />
      <Form>
        <ActivityActionList
          activity={props.activity}
          adjustActivity={props.adjustActivity}
        />
      </Form>
    </div>
  );
};
