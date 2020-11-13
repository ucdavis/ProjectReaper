import React, { Dispatch, SetStateAction } from "react";
import { Col, Form, Row } from "reactstrap";
import { ActivityActionList } from "./ActivityActionList";
import { ActivityTotal } from "./ActivityTotal";
import { Activity } from "../types";
import "./ActivityForm.css";

interface IProps {
  activity: Activity;
  acreCost: number;
  adjustActivity: Dispatch<SetStateAction<Activity[]>>;
}

export const ActivityForm = (props: IProps) => {
  let laborTotal = 0;
  let equipmentTotal = 0;
  let otherTotal = 0;
  let activityTotal = 0;

  props.activity.workItems.map((workItem) => {
    const total = workItem.rate * workItem.quantity;
    if (workItem.type === "labor") {
      laborTotal += total;
    } else if (workItem.type === "equipment") {
      equipmentTotal += total;
    } else if (workItem.type === "other") {
      otherTotal += total;
    }
  });

  activityTotal = laborTotal + equipmentTotal + otherTotal + props.acreCost;

  return (
    <div id="activityForm">
      <h5>Apple Harvest</h5>
      <hr />
      <Form>
        <ActivityActionList
          activity={props.activity}
          adjustActivity={props.adjustActivity}
        />
      </Form>

      <div id="total">
        <h6>Project Totals</h6>
        <hr id="break" />
        <ActivityTotal costName="Acre Fees" cost={props.acreCost} />
        <ActivityTotal costName="Labor" cost={laborTotal} />
        <ActivityTotal costName="Equipment" cost={equipmentTotal} />
        <ActivityTotal costName="Materials / Other" cost={otherTotal} />
        <Row>
          <Col xs="10" sm="10">
            <h6>Total Cost</h6>
          </Col>
          <Col xs="2" sm="2">
            ${activityTotal}
          </Col>
        </Row>
      </div>
    </div>
  );
};
