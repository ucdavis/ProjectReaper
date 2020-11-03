import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { ActivityActionItem } from "./ActivityActionItem";

interface IProps {
  actionType: string;
}

export const ActivityAction = (props: IProps) => {
  const [actionItems, setActionItems] = useState<JSX.Element[]>([
    <ActivityActionItem actionType={props.actionType} />,
  ]);

  const addAction = () => {
    setActionItems([
      ...actionItems,
      <ActivityActionItem actionType={props.actionType} />,
    ]);
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

      {actionItems.map((item) => item)}
      <Button color="link" onClick={addAction}>
        Add {props.actionType}
      </Button>
    </div>
  );
};
