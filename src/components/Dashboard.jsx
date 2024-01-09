// import Dialog from "./Dialog";
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
  Chip,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Lender ",
  "Merchant ",
  "Tenure",
  "Interest Rate",
  "Min Loan Amount",
  "Max Loan Amount",
  "Offer Start Date",
  "Offer End Date",
  "Offer Type",
  "Active/Inactive",
  "Edit",
];

// const TABLE_ROWS = [
//   {
//     id: "1",
//     lenderId: "1",
//     merchantId: "1",
//     tenure: "12",
//     offerType: "NCEMI",
//     status: "ACTIVE",
//   },
//   {
//     id: "2",
//     lenderId: "2",
//     merchantId: "2",
//     tenure: "6",
//     offerType: "INSTANT DISCOUNT",
//     status: "INACTIVE",
//   },
//   {
//     id: "3",
//     lenderId: "3",
//     merchantId: "3",
//     tenure: "18",
//     offerType: "INSTANT DISCOUNT",
//     status: "ACTIVE",
//   },
//   {
//     id: "4",
//     lenderId: "1",
//     merchantId: "2",
//     tenure: "9",
//     offerType: "DEFERRED_CASHBACK",
//     status: "ACTIVE",
//   },
//   {
//     id: "5",
//     lenderId: "2",
//     merchantId: "3",
//     tenure: "24",
//     offerType: "DEFERRED_CASHBACK",
//     status: "INACTIVE",
//   },
//   {
//     id: "6",
//     lenderId: "3",
//     merchantId: "1",
//     tenure: "15",
//     offerType: "DEFERRED_CASHBACK",
//     status: "INACTIVE",
//   },
//   {
//     id: "7",
//     lenderId: "1",
//     merchantId: "3",
//     tenure: "8",
//     offerType: "NCEMI",
//     status: "ACTIVE",
//   },
//   {
//     id: "8",
//     lenderId: "2",
//     merchantId: "1",
//     tenure: "12",
//     offerType: "INSTANT DISCOUNT",
//     status: "INACTIVE",
//   },
//   {
//     id: "9",
//     lenderId: "3",
//     merchantId: "2",
//     tenure: "6",
//     offerType: "DEFERRED_CASHBACK",
//     status: "ACTIVE",
//   },
//   {
//     id: "10",
//     lenderId: "1",
//     merchantId: "2",
//     tenure: "18",
//     offerType: "INSTANT DISCOUNT",
//     status: "ACTIVE",
//   },
// ];
const TABLE_ROWS = [
  {
    creditSchemeId: "88d06e29-50be-47e3-bd84-bf8bb51754cd",
    lenderId: 102,
    lenderName: "Federal Bank",
    merchantId: null,
    merchantName: null,
    offerType: null,
    minLoanAmount: null,
    maxLoanAmount: null,
    offerStartDate: null,
    offerEndDate: null,

    creditSchemeVariantDataList: [
      {
        creditSchemeVariantId: 483099,
        tenure: 3,
        tenureType: "MONTHS",
        status: "ACTIVE",
        effectiveInterestRate: 13.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 483100,
        tenure: 6,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 13.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 483101,
        tenure: 9,
        tenureType: "MONTHS",
        effectiveInterestRate: 14.5,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 483102,
        tenure: 12,
        tenureType: "MONTHS",
        effectiveInterestRate: 15.0,
        displayEffectiveInterestRate: 0.0,
      },
    ],
  },
  {
    creditSchemeId: "95710e16-5969-4d56-b1bf-b57bebfe2444",
    lenderId: 103,
    lenderName: "IIFL",
    merchantId: null,
    merchantName: null,
    offerType: null,
    minLoanAmount: null,
    maxLoanAmount: null,
    offerStartDate: null,
    offerEndDate: null,
    creditSchemeVariantDataList: [
      {
        creditSchemeVariantId: 927969,
        tenure: 3,
        tenureType: "MONTHS",
        status: "ACTIVE",
        effectiveInterestRate: 24.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 927970,
        tenure: 6,
        tenureType: "MONTHS",
        status: "ACTIVE",
        effectiveInterestRate: 24.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 927971,
        tenure: 9,
        tenureType: "MONTHS",
        status: "ACTIVE",
        effectiveInterestRate: 24.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 927972,
        tenure: 12,
        tenureType: "MONTHS",
        status: "ACTIVE",
        effectiveInterestRate: 24.0,
        displayEffectiveInterestRate: 0.0,
      },
    ],
  },
  {
    creditSchemeId: "a36e9964-20ee-427f-aaea-d36ba7298c50",
    lenderId: 103,
    lenderName: "IIFL",
    merchantName: "Toppr",
    merchantId: 40,
    offerType: null,
    minLoanAmount: null,
    maxLoanAmount: null,
    offerStartDate: null,
    offerEndDate: null,

    creditSchemeVariantDataList: [
      {
        creditSchemeVariantId: 500001,
        tenure: 3,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 0.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 500002,
        tenure: 6,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 0.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 500003,
        tenure: 9,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 0.0,
        displayEffectiveInterestRate: 0.0,
      },
    ],
  },
  {
    creditSchemeId: "b557df42-aea1-4142-884f-b97b140b83c5",
    lenderId: 103,
    lenderName: "IIFL",
    merchantName: "Pepperfry",
    merchantId: 1972581,
    offerType: null,
    minLoanAmount: null,
    maxLoanAmount: null,
    offerStartDate: null,
    offerEndDate: null,

    creditSchemeVariantDataList: [
      {
        creditSchemeVariantId: 927981,
        tenure: 6,
        tenureType: "MONTHS",
        status: "ACTIVE",
        effectiveInterestRate: 27.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 927982,
        tenure: 9,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 27.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 927983,
        tenure: 12,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 27.0,
        displayEffectiveInterestRate: 0.0,
      },
      {
        creditSchemeVariantId: 927980,
        tenure: 3,
        tenureType: "MONTHS",
        status: "INACTIVE",
        effectiveInterestRate: 0.0,
        displayEffectiveInterestRate: 0.0,
      },
    ],
  },
];

/*
  lid, mid, offtype, tenure, int_rate, disp_rate, start_date, end_date, status
*/

export default function Dashboard() {
  const tables = [];

  for (let i = 0; i < TABLE_ROWS.length; i++) {
    const element = {
      creditSchemeId: TABLE_ROWS[i].creditSchemeId,
      lenderId: TABLE_ROWS[i].lenderId,
      lenderName: TABLE_ROWS[i].lenderName,
      merchantId: TABLE_ROWS[i].merchantId,
      merchantName: TABLE_ROWS[i].merchantName,
      offerType: TABLE_ROWS[i].offerType,
      minLoanAmount: TABLE_ROWS[i].minLoanAmount,
      maxLoanAmount: TABLE_ROWS[i].maxLoanAmount,
      offerStartDate: TABLE_ROWS[i].offerStartDate,
      offerEndDate: TABLE_ROWS[i].offerEndDate,
    };
    const titles = [
      "creditSchemeVariantId",
      "tenure",
      "tenureType",
      "status",
      "effectiveInterestRate",
      "displayEffectiveInterestRate",
    ];
    for (let j = 0; j < TABLE_ROWS[i].creditSchemeVariantDataList.length; j++) {
      const element2 = { ...element };
      for (let k = 0; k < titles.length; k++) {
        element2[titles[k]] =
          TABLE_ROWS[i].creditSchemeVariantDataList[j][titles[k]];
      }
      tables.push(element2);
    }
  }
  console.log(tables);
  return (
    <>
      <Card
        className='h-full w-full overflow-visible'
        style={{ width: "150%" }}>
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
        <CardBody className='overflow-auto px-0'>
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
                      className='font-normal  leading-none opacity-70'>
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tables.map(
                (
                  {
                    lenderName,
                    merchantName,
                    offerType,
                    tenure,
                    tenureType,
                    status,
                    minLoanAmount,
                    maxLoanAmount,
                    offerStartDate,
                    offerEndDate,
                    effectiveInterestRate,
                    // eslint-disable-next-line no-unused-vars
                    creditSchemeVariantId,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <>
                      <tr key={lenderName || 1}>
                        {/* <td className={classes}>
                          <div className='flex items-center gap-3'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal'>
                              {id}
                            </Typography>
                          </div>
                        </td> */}
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {lenderName}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {merchantName}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {tenure} {tenureType}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {effectiveInterestRate}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {minLoanAmount}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {maxLoanAmount}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {offerStartDate}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {offerEndDate}
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
                          {/* <Dialog offerStatus={status} /> */}
                          <Tooltip content='Toggle offer status'>
                            {status === "ACTIVE" ? (
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
    id , lender-id, merchant-id, tenure, offer type, status,
*/
