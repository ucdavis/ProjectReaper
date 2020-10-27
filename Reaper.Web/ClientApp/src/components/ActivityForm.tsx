import * as React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";

interface IProps {
  isOpen: boolean;
  closeModal?: () => void;
}

export const ActivityForm = (props: IProps) => {
  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.closeModal}>
        <ModalHeader toggle={props.closeModal}>Create New Activity</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="activityName">Activity Name</Label>
              <Input type="text" id="activityName" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
