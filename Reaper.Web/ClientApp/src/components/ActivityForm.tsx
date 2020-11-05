import React, { useState } from "react";
import { Col, Form, Row } from "reactstrap";
import { ActivityActionList } from "./ActivityActionList";
import { ActivityTotal } from "./ActivityTotal";
import "./ActivityForm.css";

export const ActivityForm = () => {
  const [laborTotal, setLaborTotal] = useState<number>(0);
  const [equipmentTotal, setEquipmentTotal] = useState<number>(0);
  const [otherTotal, setOtherTotal] = useState<number>(0);

  return (
    <div id="activityForm">
      <h5>Apple Harvest</h5>
      <hr />
      <Form>
        <ActivityActionList
          laborTotal={laborTotal}
          equipmentTotal={equipmentTotal}
          otherTotal={otherTotal}
          laborChange={setLaborTotal}
          equipmentChange={setEquipmentTotal}
          otherChange={setOtherTotal}
        />
      </Form>

      <div id="total">
        <h6>Project Totals</h6>
        <hr id="break" />
        <ActivityTotal costName="Labor" cost={laborTotal} />
        <ActivityTotal costName="Equipment" cost={equipmentTotal} />
        <ActivityTotal costName="Materials / Other" cost={otherTotal} />
        <Row>
          <Col xs="10" sm="10">
            <h6>Total Cost</h6>
          </Col>
          <Col xs="2" sm="2">
            ${laborTotal}
          </Col>
        </Row>
      </div>
    </div>
  );
};
