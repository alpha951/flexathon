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

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   setMerchantName(item.merchantName);
  //   console.log(item);
  // };

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
              <Select color='zinc-400' label='Select Lender'>
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
              <Select color='zinc-400' label='Select Merchant'>
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
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                placeholder='500'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-2 -mt-2 text-left'>
                Offer Type
              </Typography>
              <Select color='zinc-400' label='Select Offer type'>
                <Option value='1' className='text-left'>
                  No Cost EMI
                </Option>
                <Option value='2' className='text-left'>
                  Instant Cashback
                </Option>
                <Option value='3' className='text-left'>
                  Deferred Cashback
                </Option>
                <Option value='4' className='text-left'>
                  No Offer
                </Option>
              </Select>

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-2 -mt-2 text-left'>
                Funded By
              </Typography>
              <Select color='zinc-400' label='Select Funding type'>
                <Option value='1' className='text-left'>
                  Lender
                </Option>
                <Option value='2' className='text-left'>
                  Merchant
                </Option>
                <Option value='3' className='text-left'>
                  Flexmoney
                </Option>
              </Select>
            </div>
          </CardBody>
          <CardFooter>
            <Button className='-mt-10' fullWidth>
              Update
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
