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

interface IProps {
  actionType: string;
  activityTotal: number;
  changeTotal: Dispatch<SetStateAction<number>>;
}

export const ActivityActionItem = (props: IProps) => {
  const [units, setUnits] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalAmount = units * rate;
    const activityTotal = props.activityTotal + totalAmount;
    setTotal(totalAmount);
    props.changeTotal(activityTotal);
  }, [units, rate]);

  return (
    <div>
      <Row>
        <Col xs="6">
          <FormGroup>
            {props.actionType == "Other" ? (
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
