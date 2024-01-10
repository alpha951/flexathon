/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  Input,
  Button,
  Typography,
  CardBody,
  CardFooter,
  Select,
  Option,
  input,
} from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

// import { useLocation } from "react-router-dom";

function formatDate(inputDate) {
  inputDate = new Date(inputDate);
  var day = inputDate.getDate();
  var month = inputDate.getMonth() + 1; // Month is zero-based
  var year = inputDate.getFullYear();

  // Format day and month to have leading zeros if needed
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Create the formatted date string in "dd/mm/yyyy" format
  var formattedDate = day + "/" + month + "/" + year;
  return formattedDate;
}

export default function Form({ selectedRow }) {
  // const location = useLocation();
  // const props = location.state && location.state.rowData;
  const props = selectedRow[0];
  console.log(selectedRow);
  const [formData, setFormData] = React.useState({
    lenderId: props.lenderId,
    merchantId: props.merchantId,
    offerType: props.offerType,
    interestRate: props.effectiveInterestRate,
    displayInterestRate: props.displayInterestRate,
    tenure: props.tenure,
    minLoanAmount: props.minLoanAmount,
    maxLoanAmount: props.maxLoanAmount,
    offerStartDate: props.offerStartDate,
    offerEndDate: props.offerEndDate,
    funding: props.funding,
  });

  const handleSelectOfferTypeChange = (e) => {
    console.log(e);
    setFormData((prevData) => ({ ...prevData, ["offerType"]: e }));
  };

  const handleSelectFundingChange = (e) => {
    console.log(e);
    setFormData((prevData) => ({ ...prevData, ["funding"]: e }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      if (
        formData.lenderId === "" ||
        formData.merchantId === "" ||
        formData.offerType === "" ||
        formData.interestRate === "" ||
        formData.displayInterestRate === "" ||
        formData.tenure === "" ||
        formData.minLoanAmount === "" ||
        formData.maxLoanAmount === "" ||
        formData.offerStartDate === "" ||
        formData.offerEndDate === "" ||
        formData.funding === ""
      ) {
        toast.error("Please fill all the fields", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }

      formData.offerStartDate = formatDate(formData.offerStartDate);
      formData.offerEndDate = formatDate(formData.offerEndDate);
      console.log(JSON.stringify(formData));
      const url = "https://test.instacred.me/app/dash/offers/update";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.error.explanation);
      if (data.success === true) {
        toast.success(data.message);
      } else {
        toast.error("Something Went wrong" + data.error.explanation, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      // Handle success or show an alert
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <Card
        color='transparent'
        shadow={true}
        className='w-auto mt-10'
        style={{}}>
        {/* <CardHeader
          variant='gradient'
          color='gray'
          floated={false}
          className='mb-1 grid h-14	place-items-center'
          style={{ width: "40%", margin: "0 auto" }}>
          <Typography variant='h5' color='white'>
            Offer Management
          </Typography>
        </CardHeader> */}
        <form className='mt-5 mb-10 w-auto max-w-screen-lg sm:w-96 '>
          <CardBody className='flex flex-col gap-4 -mt-9 '>
            <div className='mb-1 flex flex-col gap-4'>
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-3 -mt-2 text-left'>
                Lender Name
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='16%'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                name='interestRate'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={props.lenderId}
                readOnly
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Merchant Name
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='16%'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                name='interestRate'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={props.merchantId}
                readOnly
              />

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Rate of Interest
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='16%'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                name='interestRate'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.interestRate}
                onChange={handleChange}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Display Rate of Interest
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='0%'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                name='displayInterestRate'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.displayInterestRate}
                onChange={handleChange}
              />

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Tenure
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='30 days'
                name='tenure'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.tenure}
                onChange={handleChange}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Max Amount
              </Typography>
              <Input
                type='text'
                size='lg'
                placeholder='2000'
                name='maxLoanAmount'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.maxLoanAmount}
                onChange={handleChange}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Min Amount
              </Typography>
              <Input
                type='text'
                size='md'
                placeholder='500'
                name='minLoanAmount'
                onChange={handleChange}
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.minLoanAmount}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Start Date
              </Typography>
              <Input
                type='date'
                size='md'
                name='offerStartDate'
                placeholder='500'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.offerStartDate}
                onChange={handleChange}
              />

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                End Date
              </Typography>
              <Input
                type='date'
                size='md'
                placeholder='500'
                name='offerEndDate'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.offerEndDate}
                onChange={handleChange}
              />

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-2 -mt-2 text-left'>
                Offer Type
              </Typography>
              <Select
                color='zinc-400'
                label='Select Offer type'
                value={formData.offerType}
                name='offerType'
                onChange={handleSelectOfferTypeChange}>
                <Option value='NO_COST_EMI' className='text-left'>
                  No Cost EMI
                </Option>
                <Option value='INSTANT' className='text-left'>
                  Instant Discount
                </Option>
                <Option value='CASHBACK' className='text-left'>
                  Deferred Cashback
                </Option>
                <Option value='NO_OFFER' className='text-left'>
                  No Offer
                </Option>
              </Select>

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-2 -mt-2 text-left'>
                Funded By
              </Typography>
              <Select
                color='zinc-400'
                label='Select Funding type'
                name='funding'
                value={formData.funding}
                onChange={handleSelectFundingChange}>
                <Option value='lender' className='text-left'>
                  Lender
                </Option>
                <Option value='merchant' className='text-left'>
                  Merchant
                </Option>
              </Select>
            </div>
          </CardBody>
          <CardFooter>
            <Button className='-mt-10' fullWidth onClick={handleSubmit}>
              Update
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
