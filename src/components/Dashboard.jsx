import Dialog from "./Dialog";
// import Expand from "./Expand";

import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "ID",
  "Lender ID",
  "Merchant ID",
  "Tenure (months)",
  "Offer Type",
  "Active/Inactive",
  "Edit",
  "More",
];

const TABLE_ROWS = [
  {
    id: "1",
    lenderId: "1",
    merchantId: "1",
    tenure: "12",
    offerType: "NCEMI",
    offerStatus: "ACTIVE",
  },
  {
    id: "2",
    lenderId: "2",
    merchantId: "2",
    tenure: "6",
    offerType: "INSTANT DISCOUNT",
    offerStatus: "INACTIVE",
  },
  {
    id: "3",
    lenderId: "3",
    merchantId: "3",
    tenure: "18",
    offerType: "INSTANT DISCOUNT",
    offerStatus: "ACTIVE",
  },
  {
    id: "4",
    lenderId: "1",
    merchantId: "2",
    tenure: "9",
    offerType: "DEFERRED_CASHBACK",
    offerStatus: "ACTIVE",
  },
  {
    id: "5",
    lenderId: "2",
    merchantId: "3",
    tenure: "24",
    offerType: "DEFERRED_CASHBACK",
    offerStatus: "INACTIVE",
  },
  {
    id: "6",
    lenderId: "3",
    merchantId: "1",
    tenure: "15",
    offerType: "DEFERRED_CASHBACK",
    offerStatus: "INACTIVE",
  },
  {
    id: "7",
    lenderId: "1",
    merchantId: "3",
    tenure: "8",
    offerType: "NCEMI",
    offerStatus: "ACTIVE",
  },
  {
    id: "8",
    lenderId: "2",
    merchantId: "1",
    tenure: "12",
    offerType: "INSTANT DISCOUNT",
    offerStatus: "INACTIVE",
  },
  {
    id: "9",
    lenderId: "3",
    merchantId: "2",
    tenure: "6",
    offerType: "DEFERRED_CASHBACK",
    offerStatus: "ACTIVE",
  },
  {
    id: "10",
    lenderId: "1",
    merchantId: "2",
    tenure: "18",
    offerType: "INSTANT DISCOUNT",
    offerStatus: "ACTIVE",
  },
];

/*
  lid, mid, offtype, tenure, int_rate, disp_rate, start_date, end_date, status
*/

export default function Dashboard() {
  return (
    <>
      <Card className='h-full w-full overflow-visible'>
        <CardHeader floated={false} shadow={false} className='rounded-none'>
          <div className='mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
            <div>
              <Typography variant='h5' color='blue-gray'>
                All Offers
              </Typography>
              <Typography color='gray' className='mt-1 font-normal'>
                These are details about the recent offers
              </Typography>
            </div>
            <div className='flex w-full shrink-0 gap-2 md:w-max'>
              <div className='w-full md:w-72'>
                <Input
                  label='Search'
                  icon={<MagnifyingGlassIcon className='h-5 w-5' />}
                />
              </div>
              <Button className='flex items-center gap-3' size='sm'>
                <ArrowDownTrayIcon strokeWidth={2} className='h-4 w-4' />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className='overflow-visible px-0'>
          <table className='w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal leading-none opacity-70'>
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  { id, lenderId, merchantId, tenure, offerType, offerStatus },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <>
                      <tr key={id}>
                        <td className={classes}>
                          <div className='flex items-center gap-3'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal'>
                              {id}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {merchantId}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {lenderId}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {tenure}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-bold'>
                            {offerType}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Dialog offerStatus={offerStatus} />
                        </td>
                        <td className={classes}>
                          <button>
                            <Tooltip content='Edit'>
                              <PencilIcon className='h-4 w-4' />
                            </Tooltip>
                          </button>
                        </td>
                        {/* <Expand /> */}
                      </tr>
                    </>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
          <Button variant='outlined' size='sm'>
            Previous
          </Button>
          <div className='flex items-center gap-2'>
            <IconButton variant='outlined' size='sm'>
              1
            </IconButton>
            <IconButton variant='text' size='sm'>
              2
            </IconButton>
            <IconButton variant='text' size='sm'>
              3
            </IconButton>
            <IconButton variant='text' size='sm'>
              ...
            </IconButton>
            <IconButton variant='text' size='sm'>
              8
            </IconButton>
            <IconButton variant='text' size='sm'>
              9
            </IconButton>
            <IconButton variant='text' size='sm'>
              10
            </IconButton>
          </div>
          <Button variant='outlined' size='sm'>
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

/*
    id , lender-id, merchant-id, tenure, offer type, offerStatus,
*/
