import React, { useEffect, useState } from "react";
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
}

export const ActivityActionItem = (props: IProps) => {
  const [units, setUnits] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalAmount = units * rate;
    setTotal(totalAmount);
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
              onChange={(e) => setUnits(parseInt(e.target.value))}
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
              onChange={(e) => setRate(parseInt(e.target.value))}
              value={rate}
            />
          </InputGroup>
        </Col>

        <Col xs="2">${total}</Col>
      </Row>
    </div>
  );
};
