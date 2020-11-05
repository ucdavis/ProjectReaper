import React from "react";
import { Col, Row } from "reactstrap";

interface IProps {
  costName: string;
  cost: number;
}

export const ActivityTotal = (props: IProps) => {
  return (
    <Row>
      <Col xs="10" sm="10">
        <div>{props.costName}</div>
      </Col>
      <Col xs="2" sm="2">
        ${props.cost}
      </Col>
    </Row>
  );
};
