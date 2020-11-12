import React, { useState } from "react";
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
import { WorkItem } from "../types";
import { ActivityForm } from "./ActivityForm";
import "./ActivitySection.css";

export const ActivitySection = () => {
  const [workItems, setWorkItems] = useState<WorkItem[]>([
    {
      type: "labor",
      quantity: 0,
      rate: 0,
    },
    {
      type: "equipment",
      quantity: 0,
      rate: 0,
    },
    {
      type: "other",
      quantity: 0,
      rate: 0,
    },
  ]);

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
                  <Input type="text" id="acres" />
                </Col>
                <Col xs="4">
                  <Label for="rate">
                    <h6>Rate</h6>
                  </Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" id="rate" />
                  </InputGroup>
                </Col>
                <Col xs="4">
                  <h6>Total Acreage Fee</h6>
                </Col>
              </Row>
              <br />
              <Button color="success" size="lg">
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
      <ActivityForm workItems={workItems} adjustWorkItems={setWorkItems} />
    </Container>
  );
};
