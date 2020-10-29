import * as React from "react";
import { Row, Col } from "reactstrap";
import { ActivityAction } from "./ActivityAction";

export const ActivityActionList = () => {
  return (
    <div>
      <Row>
        <Col xs="6">
          <h6>Labor Select</h6>
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
      <ActivityAction />
    </div>
  );
};
