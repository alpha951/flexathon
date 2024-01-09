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

export default function Form() {
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
            {/* <div
              className='grid grid-cols-4 grid-flow-col gap-10'
              style={{ width: "175%", margin: "0 auto" }}>
              {" "}
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 mt-2 -mr-2 '>
                Lender ID
              </Typography>
              <Input
                size='lg'
                placeholder='123'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900 '
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
                Merchant ID
              </Typography>
              <Input
                size='lg'
                placeholder='123'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className='grid grid-cols-4 grid-flow-col gap-10'>
              {" "}
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
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
                className='-mb-5 -mt-2'>
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
            </div>
            <div className='grid grid-cols-4 grid-flow-col gap-10'>
              {" "}
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
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
                className='-mb-5 -mt-2'>
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
            </div>
            <div className='grid grid-cols-4 grid-flow-col gap-10'>
              {" "}
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
                Offer Type
              </Typography>
              <Select color='zinc-400' label='Select Offer type'>
                <Option value='1'>NCEMI</Option>
                <Option value='2'>Instant Cashback</Option>
                <Option value='3'>Deferred Cashback</Option>
              </Select>
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
                Funded By
              </Typography>
              <Select color='zinc-400' label='Select Offer type'>
                <Option value='1'>Lender</Option>
                <Option value='2'>Merchant</Option>
                <Option value='3'>Flexmoney</Option>
              </Select>
            </div> */}
            <div className='mb-1 flex flex-col gap-4'>
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2 '>
                Lender ID
              </Typography>
              <Input
                size='lg'
                placeholder='123'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
                Merchant ID
              </Typography>
              <Input
                size='lg'
                placeholder='123'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
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
                className='-mb-5 -mt-2'>
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
                className='-mb-5 -mt-2'>
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
                className='-mb-5 -mt-2'>
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
                className='-mb-5 -mt-2'>
                Offer Type
              </Typography>
              <Select color='zinc-400' label='Select Offer type'>
                <Option value='1'>NCEMI</Option>
                <Option value='2'>Instant Cashback</Option>
                <Option value='3'>Deferred Cashback</Option>
              </Select>

              <Typography
                variant='h6'
                color='blue-gray'
                className='-mb-5 -mt-2'>
                Funded By
              </Typography>
              <Select color='zinc-400' label='Select Offer type'>
                <Option value='1'>Lender</Option>
                <Option value='2'>Merchant</Option>
                <Option value='3'>Flexmoney</Option>
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
