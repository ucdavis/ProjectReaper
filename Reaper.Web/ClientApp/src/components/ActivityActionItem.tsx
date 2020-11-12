import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";
import { WorkItem } from "../types";

interface IProps {
  action: WorkItem;
  workItems: WorkItem[];
  adjustWorkItems: Dispatch<SetStateAction<WorkItem[]>>;
}

export const ActivityActionItem = (props: IProps) => {
  const [units, setUnits] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const targetIndex = props.workItems.findIndex(
      (currAction) => currAction === props.action
    );
    const totalAmount = units * rate;
    let workItemsCopy = [...props.workItems];
    workItemsCopy[targetIndex].rate = rate;
    workItemsCopy[targetIndex].quantity = units;
    setTotal(totalAmount);
    props.adjustWorkItems(workItemsCopy);
  }, [units, rate]);

  return (
    <div>
      <Row>
        <Col xs="6">
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
              value={units}
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
              value={rate}
            />
          </InputGroup>
        </Col>

        <Col xs="2">${total}</Col>
      </Row>
    </div>
  );
};
