import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";
import { Activity, WorkItem } from "../types";

interface IProps {
  action: WorkItem;
  activity: Activity;
  adjustActivity: Dispatch<SetStateAction<Activity[]>>;
}

export const ActivityActionItem = (props: IProps) => {
  const [units, setUnits] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    props.adjustActivity((prevActivities) => updateAction(prevActivities));
    const totalAmount = units * rate;
    setTotal(totalAmount);
  }, [units, rate]);

  const deleteAction = (prevActivities: Activity[]) => {
    let updatedActivities = [...prevActivities];
    const actionIndex = prevActivities.findIndex(
      (currActivity) => currActivity === props.activity
    );
    const workItemIndex = updatedActivities[actionIndex].workItems.findIndex(
      (currAction) => currAction === props.action
    );

    updatedActivities[actionIndex].workItems = updatedActivities[
      actionIndex
    ].workItems.filter(
      (workItem) =>
        workItem !== updatedActivities[actionIndex].workItems[workItemIndex]
    );

    return updatedActivities;
  };

  const updateAction = (prevActivities: Activity[]) => {
    let updatedActivities = [...prevActivities];
    const actionIndex = prevActivities.findIndex(
      (currActivity) => currActivity === props.activity
    );
    const workItemIndex = updatedActivities[actionIndex].workItems.findIndex(
      (currAction) => currAction === props.action
    );
    updatedActivities[actionIndex].workItems[workItemIndex].rate = rate;
    updatedActivities[actionIndex].workItems[workItemIndex].quantity = units;

    return updatedActivities;
  };

  return (
    <div>
      <Row>
        <Col xs="4">
          <FormGroup>
            {props.action.type == "other" ? (
              <Input />
            ) : (
              <Input type="select" name="select">
                <option>Hello</option>
                <option>Bye</option>
              </Input>
            )}
          </FormGroup>
        </Col>

        <Col xs="2">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>hr</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              id="units"
              onChange={(e) =>
                e.target.value
                  ? setUnits(parseInt(e.target.value))
                  : setUnits(0)
              }
            />
          </InputGroup>
        </Col>

        <Col xs="2">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              id="rate"
              onChange={(e) =>
                e.target.value ? setRate(parseInt(e.target.value)) : setRate(0)
              }
            />
          </InputGroup>
        </Col>

        <Col xs="2">${total}</Col>

        <Col xs="2">
          <Button
            color="danger"
            onClick={() =>
              props.adjustActivity((prevActivities) =>
                deleteAction(prevActivities)
              )
            }
          >
            Delete
          </Button>
        </Col>
      </Row>
    </div>
  );
};
