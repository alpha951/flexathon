import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Chip,
  Tooltip,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function DialogWithForm({ offerStatus }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <button onClick={handleOpen}>
        {" "}
        <Tooltip content='Toggle offer status'>
          {offerStatus === "ACTIVE" ? (
            <Chip
              variant='ghost'
              color='green'
              size='sm'
              value='Active'
              icon={
                <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
              }
            />
          ) : (
            <Chip
              variant='ghost'
              color='red'
              size='sm'
              value='Inactive'
              icon={
                <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
              }
            />
          )}
        </Tooltip>
      </button>
      <Dialog
        size='xs'
        open={open}
        handler={() => handleOpen()}
        className='bg-transparent shadow-none'>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4'>
            <Typography variant='h4' color='blue-gray'>
              Update Offer Details
            </Typography>
            <Typography
              className='mb-3 font-normal'
              variant='paragraph'
              color='gray'>
              Enter start and end date to active the this entry.
            </Typography>
            <Typography className='-mb-2' variant='h6'>
              Start Date
            </Typography>
            <Input label='start-date' type='date' size='lg' />
            <Typography className='-mb-2' variant='h6'>
              End Date
            </Typography>
            <Input label='end-date' type='date' size='lg' />
          </CardBody>
          <CardFooter className='pt-0'>
            <Button variant='gradient' onClick={handleOpen} fullWidth>
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
