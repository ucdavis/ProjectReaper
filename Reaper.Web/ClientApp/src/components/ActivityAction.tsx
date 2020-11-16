import React, { Dispatch, SetStateAction } from "react";
import { Button, Col, Row } from "reactstrap";
import { ActivityActionItem } from "./ActivityActionItem";
import { Activity, WorkItem } from "../types";

interface IProps {
  actionType: string;
  fields: WorkItem[];
  activity: Activity;
  adjustActivity: Dispatch<SetStateAction<Activity[]>>;
}

export const ActivityAction = (props: IProps) => {
  const addAction = (actionType: string) => {
    const newAction = {
      type: actionType,
      quantity: 0,
      rate: 0,
    };

    props.adjustActivity((prevActivities) => {
      const targetIndex = prevActivities.findIndex(
        (currActivity) => currActivity === props.activity
      );
      const newActivities = [...prevActivities];
      newActivities[targetIndex].workItems.push(newAction);
      return newActivities;
    });
  };

  return (
    <div>
      <Row>
        <Col xs="6">
          <h6>{props.actionType}</h6>
        </Col>
        <Col xs="2">
          <h6>Time</h6>
        </Col>
        <Col xs="2">
          <h6>Rate</h6>
        </Col>
        <Col xs="2">
          <h6>Total</h6>
        </Col>
      </Row>

      {props.fields.map((field) => (
        <ActivityActionItem
          action={field}
          activity={props.activity}
          adjustActivity={props.adjustActivity}
        />
      ))}

      <Button color="link" onClick={() => addAction(props.actionType)}>
        Add {props.actionType}
      </Button>
    </div>
  );
};
