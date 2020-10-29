import * as React from "react";
import { Form } from "reactstrap";
import { ActivityActionList } from "./ActivityActionList";

export const ActivityForm = () => {
  return (
    <div>
      <h5>Apple Harvest</h5>
      <hr />
      <Form>
        <ActivityActionList />
      </Form>
    </div>
  );
};
