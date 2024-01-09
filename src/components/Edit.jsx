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
} from "@material-tailwind/react";

export default function Form(props) {
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
            Update Data
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
              <Input
                type='text'
                size='lg'
                placeholder={props.lenderName || "Lender Name"}
                readOnly
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                placeholder={props.merchantName || "Merchant Name"}
                readOnly
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
                placeholder={props.effectiveInterestRate}
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
                placeholder={props.displayInterestRate}
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
                placeholder={props.tenure || "30 days"}
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
                placeholder={props.maxLoanAmount || "2000"}
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
                placeholder={props.minLoanAmount}
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
                placeholder={props.offerStartDate}
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
                placeholder={props.offerEndDate}
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
              <Select
                color='zinc-400'
                label='Select Offer type'
                placeholder={props.offerType}>
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
