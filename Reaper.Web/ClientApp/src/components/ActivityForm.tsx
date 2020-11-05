import React, { useState } from "react";
import { Form } from "reactstrap";
import { ActivityActionList } from "./ActivityActionList";

export const ActivityForm = () => {
  const [laborTotal, setLaborTotal] = useState<number>(0);
  const [equipmentTotal, setEquipmentTotal] = useState<number>(0);
  const [otherTotal, setOtherTotal] = useState<number>(0);

  return (
    <div>
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

      <div>
        <div>{laborTotal}</div>
        <div>{equipmentTotal}</div>
        <div>{otherTotal}</div>
      </div>
    </div>
  );
};
