import React, { Dispatch, SetStateAction, useState } from "react";
import { Col, Form, Row } from "reactstrap";
import { ActivityActionList } from "./ActivityActionList";
import { ActivityTotal } from "./ActivityTotal";
import { WorkItem } from "../types";
import "./ActivityForm.css";

interface IProps {
  workItems: WorkItem[];
  adjustWorkItems: Dispatch<SetStateAction<WorkItem[]>>;
}

export const ActivityForm = (props: IProps) => {
  return (
    <div id="activityForm">
      <h5>Apple Harvest</h5>
      <hr />
      <Form>
        <ActivityActionList
          workItems={props.workItems}
          adjustWorkItems={props.adjustWorkItems}
        />
      </Form>

      <div id="total">
        <h6>Project Totals</h6>
        <hr id="break" />
        <ActivityTotal costName="Labor" cost={100} />
        <ActivityTotal costName="Equipment" cost={100} />
        <ActivityTotal costName="Materials / Other" cost={100} />
        <Row>
          <Col xs="10" sm="10">
            <h6>Total Cost</h6>
          </Col>
          <Col xs="2" sm="2">
            ${100}
          </Col>
        </Row>
      </div>
    </div>
  );
};
