/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import Dialog from "./Dialog";
// import Expand from "./Expand";
import React from "react";
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

// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

export default function Dashboard({ setSelectedRow }) {
  const navigate = useNavigate();

  const [TABLE_ROWS, setTABLE_ROWS] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = "https://test.instacred.me/app/dash/offers/get";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        //   console.log(data.data);

        // Handle success or show an alert
        if (data.success === true) {
          setTABLE_ROWS(data.data);
        } else console.log("error");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  let tables = [];

  for (let i = 0; i < TABLE_ROWS?.length; i++) {
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
    for (
      let j = 0;
      j < TABLE_ROWS[i]?.creditSchemeVariantDataList?.length;
      j++
    ) {
      const element2 = { ...element };
      for (let k = 0; k < titles.length; k++) {
        element2[titles[k]] =
          TABLE_ROWS[i]?.creditSchemeVariantDataList[j][titles[k]];
      }
      tables.push(element2);
    }
  }
  console.log(tables);
  tables = [
    {
      creditSchemeId: "3232",
      lenderId: "12",
      lenderName: "HDFC",
      merchantId: "4234",
      merchantName: "Ethos Offline",
      offerType: "CASHBACK",
      minLoanAmount: "500",
      maxLoanAmount: "10000",
      offerStartDate: "12/12/2023",
      offerEndDate: "24/01/2024",
      creditSchemeVariantId: "3",
      tenure: "12",
      tenureType: "MONTHS",
      status: "ACTIVE",
      effectiveInterestRate: "13",
      displayEffectiveInterestRate: "1",
    },
    {
      creditSchemeId: "3232",
      lenderId: "12",
      lenderName: "ICICI",
      merchantId: "4234",
      merchantName: "Batteryguru",
      offerType: "NO COST EMI",
      minLoanAmount: "800",
      maxLoanAmount: "95000",
      offerStartDate: "05/01/2024",
      offerEndDate: "12/02/2024",
      creditSchemeVariantId: "3",
      tenure: "12",
      tenureType: "MONTHS",
      status: "INACTIVE",
      effectiveInterestRate: "13",
      displayEffectiveInterestRate: "1",
    },
    {
      creditSchemeId: "3232",
      lenderId: "12",
      lenderName: "IDFC First Bank",
      merchantId: "4234",
      merchantName: "UpTop",
      offerType: "DEFERRED CASHBACK",
      minLoanAmount: "780",
      maxLoanAmount: "90000",
      offerStartDate: "12/12/2023",
      offerEndDate: "24/01/2024",
      creditSchemeVariantId: "3",
      tenure: "12",
      tenureType: "MONTHS",
      status: "ACTIVE",
      effectiveInterestRate: "13",
      displayEffectiveInterestRate: "1",
    },
  ];
  // function handleEditClick(rowData) {
  //   // Navigate to the edit page with the rowData as state
  //   navigate("/edit-page", { state: { rowData } });
  // }

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
                    lenderId,
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
                    displayInterestRate,
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
                          <Button
                            onClick={() => {
                              setSelectedRow(
                                tables.filter((table) => {
                                  return table.lenderId === lenderId;
                                })
                              );
                              navigate("/edit-page");
                            }}>
                            <Tooltip content='Edit'>
                              <PencilIcon className='h-4 w-4' />
                            </Tooltip>
                          </Button>
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
