import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { Activity } from "../types";
import { ActivityForm } from "./ActivityForm";
import "./ActivitySection.css";

interface IProps {
  activities: Activity[];
  adjustActivity: Dispatch<SetStateAction<Activity[]>>;
  addActivity: () => void;
}

export const ActivitySection = (props: IProps) => {
  const [acreNumber, setAcreNumber] = useState<number>(0);
  const [acreRate, setAcreRate] = useState<number>(0);
  const [acreCost, setAcreCost] = useState<number>(0);

  useEffect(() => {
    const newTotal = acreNumber * acreRate;
    setAcreCost(newTotal);
  });

  return (
    <Container fluid id="activityContainer">
      {/* Header */}
      <div>
        <h5>Field Request</h5>
        <div>
          <h6>Professor Scott Kirkland</h6>
          <h6>Completed by 10.12.2021</h6>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Form */}
      <div>
        <h5>Project Details</h5>
        <hr />
        <Container>
          <Row>
            {/* Left Details */}
            <Col xs="6">
              <Label for="projectName">
                <h6>Project Name</h6>
              </Label>
              <Input type="text" id="projectName" />
              <br />
              <Row>
                <Col xs="4">
                  <Label for="acres">
                    <h6>Number of Acres</h6>
                  </Label>
                  <Input
                    type="number"
                    id="acres"
                    onChange={(e) =>
                      e.target.value
                        ? setAcreNumber(parseInt(e.target.value))
                        : setAcreNumber(0)
                    }
                  />
                </Col>
                <Col xs="4">
                  <Label for="rate">
                    <h6>Rate</h6>
                  </Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="number"
                      id="rate"
                      onChange={(e) =>
                        e.target.value
                          ? setAcreRate(parseInt(e.target.value))
                          : setAcreRate(0)
                      }
                    />
                  </InputGroup>
                </Col>
                <Col xs="4">
                  <h6>Total Acreage Fee</h6>
                  <div>{acreCost}</div>
                </Col>
              </Row>
              <br />
              <Button color="success" size="lg" onClick={props.addActivity}>
                Add Activity
              </Button>
            </Col>

            {/* Right Details */}
            <Col xs="6">
              <Label for="projectLocation">Project Location</Label>
              <Input type="text" id="projectLocation" />
              <br />
              <div id="map" />
            </Col>
          </Row>
        </Container>
      </div>
      <ActivityForm
        activities={props.activities}
        acreCost={acreCost}
        adjustActivity={props.adjustActivity}
      />
    </Container>
  );
};
