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

export const ActivityAction = () => {
  const [time, setTime] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalAmount = time * rate;
    setTotal(totalAmount);
  }, [time, rate]);

  return (
    <Row>
      <Col xs="6">
        <FormGroup>
          <Input type="select" name="select">
            <option>Hello</option>
            <option>Bye</option>
          </Input>
        </FormGroup>
      </Col>

      <Col xs="2">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>hr</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            id="time"
            onChange={(e) => setTime(parseInt(e.target.value))}
            value={time}
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
  );
};
