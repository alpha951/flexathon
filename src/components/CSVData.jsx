import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogDefault({ csvdata }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant='gradient'>
        View more
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>All CSVData.</DialogHeader>
        <DialogBody>
            {/* {csvdata.map((data) => (

            )} */}
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'>
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
