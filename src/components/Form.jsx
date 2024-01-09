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
} from "@material-tailwind/react";

import React from "react";

export default function Form() {
  // const [merchantName, setMerchantName] = React.useState("Placeholder");

  const [lender, setLender] = React.useState([]);
  const [merchant, setMerchant] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

  const [formData, setFormData] = React.useState({
    lenderId: "",
    merchantId: "",
    offerType: "",
    interestRate: "",
    displayInterestRate: "",
    tenure: "",
    minLoanAmount: "",
    maxLoanAmount: "",
    offerStartDate: "",
    offerEndDate: "",
    funding: "",
  });

  const handleSelectLenderChange = (e) => {
    console.log(e);
    setFormData((prevData) => ({ ...prevData, ["lenderId"]: e }));
  };
  const handleSelectMerchantChange = (e) => {
    console.log(e);
    setFormData((prevData) => ({ ...prevData, ["merchantId"]: e }));
  };

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
      console.log(JSON.stringify(formData));
      const url = "/app/dash/offers/insert";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.error.explanation);

      // Handle success or show an alert
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = "https://admin-staging.instacred.dev/app/dash/lender/all";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        //   console.log(data.data);

        // Handle success or show an alert
        // setLoading(false);
        if (data.success === true) {
          // toast.success(data.message);
          setLender(data.data);
        } else {
          // toast.error(data.error.explanation);
          console.log("error");
        }
      } catch (error) {
        // toast.error("Something went wrong!");
        console.log(error);
      }
    }
    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url =
          "https://admin-staging.instacred.dev/app/dash/get-merchants-info?pgId=6";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // setLoading(false);
        if (data.success === true) {
          setMerchant(data.data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <>
      <Card
        color='transparent'
        shadow={true}
        className='w-auto mt-10'
        style={{}}>
        <CardHeader
          variant='gradient'
          color='gray'
          floated={false}
          className='mb-1 grid h-14	place-items-center'
          style={{ width: "40%", margin: "0 auto" }}>
          <Typography variant='h5' color='white'>
            Edit Product
          </Typography>
        </CardHeader>
        <form className='mt-5 mb-10 w-auto max-w-screen-lg sm:w-96 '>
          <CardBody className='flex flex-col gap-4 -mt-9 '>
            <div className='mb-1 flex flex-col gap-4'>
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-3 -mt-2 text-left'>
                Lender Name
              </Typography>
              <Select
                color='zinc-400'
                label='Select Lender'
                name='lenderId'
                value={formData.lenderId}
                onChange={handleSelectLenderChange}>
                {lender.map((item) => (
                  <Option
                    key={item.lenderId}
                    value={item.lenderId}
                    className='text-left'>
                    {item.name}
                  </Option>
                ))}
              </Select>

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 text-left'>
                Merchant Name
              </Typography>
              <Select
                color='zinc-400'
                label='Select Merchant'
                name='merchantId'
                value={formData.merchantId}
                onChange={handleSelectMerchantChange}>
                {merchant.map((item) => (
                  <Option
                    key={item.merchantId}
                    value={item.merchantId}
                    className='text-left'>
                    {item.name}
                  </Option>
                ))}
              </Select>

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
                Display rate of Interest
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
