{
  /* <ReactSearchAutocomplete
                value={merchantName}
                items={merchant.data}
                fuseOptions={{ keys: ["merchantName", "channel"] }}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onChange={handleOnSelect}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                onClear={handleOnClear}
                autoFocus
                formatResult={formatResult}
                styling={{
                  height: "40px",
                  border: "1px solid gray",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  boxShadow: "none",
                  hoverBackgroundColor: "gray",
                  color: "black",
                  fontSize: "12px",
                  fontFamily: "Courier",
                  iconColor: "black",
                  lineColor: "gray",
                  placeholderColor: "black",
                  clearIconMargin: "3px 8px 0 0",
                  zIndex: 2,
                }}
              /> */
}


// import { ReactSearchAutocomplete } from "react-search-autocomplete";

// const lender = {
//   success: true,
//   code: 0,
//   data: [
//     {
//       lenderId: 901,
//       name: "Bank of Baroda",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//       maxLoanAmount: 50000.0,
//     },
//     {
//       lenderId: 1401,
//       name: "CASHe",
//       lenderStatus: "0",
//       minLoanAmount: 1000.0,
//     },
//     {
//       lenderId: 1601,
//       name: "DMI Finance",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//     },
//     {
//       lenderId: 102,
//       name: "Federal Bank",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//       maxLoanAmount: 150000.0,
//     },
//     {
//       lenderId: 502,
//       name: "FlexiPay By HDFC Bank",
//       lenderStatus: "0",
//       minLoanAmount: 1000.0,
//       maxLoanAmount: 10000.0,
//     },
//     {
//       lenderId: 1201,
//       name: "HDB FS",
//       lenderStatus: "0",
//       minLoanAmount: 3000.0,
//       maxLoanAmount: 30000.0,
//     },
//     {
//       lenderId: 501,
//       name: "HDFC Bank",
//       lenderStatus: "0",
//       minLoanAmount: 3000.0,
//       maxLoanAmount: 500000.0,
//     },
//     {
//       lenderId: 601,
//       name: "Home Credit",
//       lenderStatus: "0",
//       minLoanAmount: 1000.0,
//       maxLoanAmount: 150000.0,
//     },
//     {
//       lenderId: 701,
//       name: "ICICI Bank",
//       lenderStatus: "0",
//       minLoanAmount: 7000.0,
//       maxLoanAmount: 500000.0,
//     },
//     {
//       lenderId: 202,
//       name: "IDFC First Bank",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//     },
//     {
//       lenderId: 201,
//       name: "IDFC FIRST Bank",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//       maxLoanAmount: 75000.0,
//     },
//     {
//       lenderId: 1,
//       name: "Instalend",
//       lenderStatus: "0",
//       minLoanAmount: 200.0,
//     },
//     {
//       lenderId: 10002,
//       name: "InstaLend Paylater",
//       lenderStatus: "0",
//       minLoanAmount: 200.0,
//     },
//     {
//       lenderId: 401,
//       name: "Kotak Mahindra Bank",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//     },
//     {
//       lenderId: 1301,
//       name: "KreditBee",
//       lenderStatus: "0",
//       minLoanAmount: 2400.0,
//     },
//     {
//       lenderId: 1102,
//       name: "Lazypay",
//       lenderStatus: "0",
//       minLoanAmount: 500.0,
//       maxLoanAmount: 9999.0,
//     },
//     {
//       lenderId: 402,
//       name: "Pay Later by Kotak Mahindra Bank",
//       lenderStatus: "0",
//       minLoanAmount: 1000.0,
//       maxLoanAmount: 15000.0,
//     },
//     {
//       lenderId: 1501,
//       name: "TVS Credit",
//       lenderStatus: "0",
//       minLoanAmount: 5000.0,
//     },
//     {
//       lenderId: 301,
//       name: "Fullerton",
//       lenderStatus: "1",
//       minLoanAmount: 26100.0,
//     },
//     {
//       lenderId: 103,
//       name: "IIFL",
//       lenderStatus: "1",
//     },
//     {
//       lenderId: 801,
//       name: "Mahindra Finance",
//       lenderStatus: "1",
//       minLoanAmount: 5001.0,
//       maxLoanAmount: 150000.0,
//     },
//   ],
// };

// const merchant = {
//   success: true,
//   code: 0,
//   data: [
//     {
//       gatewayMerchantId: "558438",
//       channel: "ONLINE",
//       merchantName: "Texvyn",
//       merchantId: 2476275,
//     },
//     {
//       gatewayMerchantId: "609514",
//       channel: "ONLINE",
//       merchantName: "The Future Product",
//       merchantId: 4737610,
//     },
//     {
//       gatewayMerchantId: "109702",
//       channel: "ONLINE",
//       merchantName: "LEATHERMOZZO",
//       merchantId: 3661040,
//     },
//     {
//       gatewayMerchantId: "119401",
//       channel: "ONLINE",
//       merchantName: "Celestialpc",
//       merchantId: 2170745,
//     },
//     {
//       gatewayMerchantId: "245625",
//       channel: "ONLINE",
//       merchantName: "FunkyTradition Fashion Store Private Limited",
//       merchantId: 1804424,
//     },
//     {
//       gatewayMerchantId: "885779",
//       channel: "ONLINE",
//       merchantName: "Hellomitr Distribution",
//       merchantId: 4737951,
//     },
//     {
//       gatewayMerchantId: "603506",
//       channel: "ONLINE",
//       merchantName: "Swapna Infotech",
//       merchantId: 4737187,
//     },
//     {
//       gatewayMerchantId: "202330",
//       channel: "ONLINE",
//       merchantName: "bofrike",
//       merchantId: 4737193,
//     },
//     {
//       gatewayMerchantId: "492540",
//       channel: "ONLINE",
//       merchantName: "Myntra",
//       merchantId: 1,
//     },
//     {
//       gatewayMerchantId: "368961",
//       channel: "ONLINE",
//       merchantName: "Theexcelschool",
//       merchantId: 3798306,
//     },
//     {
//       gatewayMerchantId: "271896",
//       channel: "ONLINE",
//       merchantName: "WonderChef",
//       merchantId: 2614644,
//     },
//     {
//       gatewayMerchantId: "182003",
//       channel: "ONLINE",
//       merchantName: "Gonoise",
//       merchantId: 1094794,
//     },
//     {
//       gatewayMerchantId: "623395",
//       channel: "ONLINE",
//       merchantName: "Bajaao",
//       merchantId: 3798308,
//     },
//     {
//       gatewayMerchantId: "234712",
//       channel: "ONLINE",
//       merchantName: "Headphone Zone",
//       merchantId: 4737182,
//     },
//     {
//       gatewayMerchantId: "204906",
//       channel: "ONLINE",
//       merchantName: "Eminence Immigration consultant Private Limited",
//       merchantId: 1804430,
//     },
//     {
//       gatewayMerchantId: "666565",
//       channel: "ONLINE",
//       merchantName: "TravelonEmi",
//       merchantId: 2031821,
//     },
//     {
//       gatewayMerchantId: "896221",
//       channel: "ONLINE",
//       merchantName: "Nykaa",
//       merchantId: 919032,
//     },
//     {
//       gatewayMerchantId: "579673",
//       channel: "ONLINE",
//       merchantName: "Fiatrip",
//       merchantId: 4737180,
//     },
//     {
//       gatewayMerchantId: "700853",
//       channel: "ONLINE",
//       merchantName: "Ethewear",
//       merchantId: 2476273,
//     },
//     {
//       gatewayMerchantId: "127190",
//       channel: "ONLINE",
//       merchantName: "Brain Depth Technologies Pvt Ltd",
//       merchantId: 4737198,
//     },
//     {
//       gatewayMerchantId: "803692",
//       channel: "ONLINE",
//       merchantName: "RK Tech Solutions",
//       merchantId: 2031819,
//     },
//     {
//       gatewayMerchantId: "474906",
//       channel: "ONLINE",
//       merchantName: "Test Business",
//       merchantId: 4754859,
//     },
//     {
//       gatewayMerchantId: "861191",
//       channel: "ONLINE",
//       merchantName: "Imfitindia",
//       merchantId: 2560682,
//     },
//     {
//       gatewayMerchantId: "808876",
//       channel: "ONLINE",
//       merchantName: "Batteryguru",
//       merchantId: 2560680,
//     },
//     {
//       gatewayMerchantId: "985169",
//       channel: "ONLINE",
//       merchantName: "SummerEssentials",
//       merchantId: 2215472,
//     },
//     {
//       gatewayMerchantId: "936175",
//       channel: "ONLINE",
//       merchantName: "Maahaeroo",
//       merchantId: 3757947,
//     },
//     {
//       gatewayMerchantId: "676670",
//       channel: "ONLINE",
//       merchantName: "Ethos Offline",
//       merchantId: 1686191,
//     },
//     {
//       gatewayMerchantId: "952878",
//       channel: "ONLINE",
//       merchantName: "ALL IN ONE DESTINATION",
//       merchantId: 1804426,
//     },
//     {
//       gatewayMerchantId: "314188",
//       channel: "ONLINE",
//       merchantName: "Itsale",
//       merchantId: 4737184,
//     },
//     {
//       gatewayMerchantId: "866742",
//       channel: "ONLINE",
//       merchantName: "SQUATS",
//       merchantId: 3798310,
//     },
//     {
//       gatewayMerchantId: "929675",
//       channel: "ONLINE",
//       merchantName: "Turmswear",
//       merchantId: 3757945,
//     },
//     {
//       gatewayMerchantId: "752431",
//       channel: "ONLINE",
//       merchantName: "Vista",
//       merchantId: 4737181,
//     },
//     {
//       gatewayMerchantId: "271467",
//       channel: "ONLINE",
//       merchantName: "Led Solar Lights",
//       merchantId: 1686298,
//     },
//     {
//       gatewayMerchantId: "237862",
//       channel: "ONLINE",
//       merchantName: "Specsmakers Opticians Pvt Ltd",
//       merchantId: 2031817,
//     },
//     {
//       gatewayMerchantId: "692036",
//       channel: "ONLINE",
//       merchantName: "Bonobed",
//       merchantId: 3757949,
//     },
//     {
//       gatewayMerchantId: "134131",
//       channel: "ONLINE",
//       merchantName: "TRIPSOIPORT TOURS AND TRAVELS PVT LTD",
//       merchantId: 2031823,
//     },
//     {
//       gatewayMerchantId: "784993",
//       channel: "ONLINE",
//       merchantName: "UpTop",
//       merchantId: 4737186,
//     },
//     {
//       gatewayMerchantId: "420161",
//       channel: "ONLINE",
//       merchantName: "Screen Fix",
//       merchantId: 2476279,
//     },
//     {
//       gatewayMerchantId: "509441",
//       channel: "ONLINE",
//       merchantName: "Budli",
//       merchantId: 1094790,
//     },
//     {
//       gatewayMerchantId: "657886",
//       channel: "ONLINE",
//       merchantName: "UrbanLilac",
//       merchantId: 4737192,
//     },
//     {
//       gatewayMerchantId: "477624",
//       channel: "ONLINE",
//       merchantName: "X Efforts For Good",
//       merchantId: 1804422,
//     },
//     {
//       gatewayMerchantId: "751622",
//       channel: "ONLINE",
//       merchantName: "Yourstruly Beverages",
//       merchantId: 1260738,
//     },
//     {
//       gatewayMerchantId: "308968",
//       channel: "ONLINE",
//       merchantName: "Weavesmart Online Service",
//       merchantId: 1848718,
//     },
//     {
//       gatewayMerchantId: "242226",
//       channel: "ONLINE",
//       merchantName: "7 Seas Holiday",
//       merchantId: 3347671,
//     },
//     {
//       gatewayMerchantId: "813687",
//       channel: "ONLINE",
//       merchantName: "EliteHubs",
//       merchantId: 4739790,
//     },
//     {
//       gatewayMerchantId: "244297",
//       channel: "ONLINE",
//       merchantName: "Health and Glow",
//       merchantId: 4737196,
//     },
//     {
//       gatewayMerchantId: "947321",
//       channel: "ONLINE",
//       merchantName: "Tally Mall",
//       merchantId: 1651675,
//     },
//     {
//       gatewayMerchantId: "300484",
//       channel: "ONLINE",
//       merchantName: "Powerjet",
//       merchantId: 2476277,
//     },
//     {
//       gatewayMerchantId: "745057",
//       channel: "ONLINE",
//       merchantName: "Green Soul Online Services",
//       merchantId: 2031813,
//     },
//     {
//       gatewayMerchantId: "129736",
//       channel: "ONLINE",
//       merchantName: "Men's Body Shaper",
//       merchantId: 1848720,
//     },
//     {
//       gatewayMerchantId: "458259",
//       channel: "ONLINE",
//       merchantName: "Infinityphone",
//       merchantId: 4737188,
//     },
//     {
//       gatewayMerchantId: "466807",
//       channel: "ONLINE",
//       merchantName: "Bigphi Technologies Private Limited",
//       merchantId: 3347673,
//     },
//     {
//       gatewayMerchantId: "231414",
//       channel: "ONLINE",
//       merchantName: "emibaba",
//       merchantId: 4737201,
//     },
//     {
//       gatewayMerchantId: "963291",
//       channel: "ONLINE",
//       merchantName: "Fiddolin Musical Goods Private Limited",
//       merchantId: 2614646,
//     },
//     {
//       gatewayMerchantId: "977142",
//       channel: "ONLINE",
//       merchantName: "Privee Paris",
//       merchantId: 4737194,
//     },
//     {
//       gatewayMerchantId: "324266",
//       channel: "ONLINE",
//       merchantName: "Sarada Infotech",
//       merchantId: 2031827,
//     },
//     {
//       gatewayMerchantId: "635575",
//       channel: "ONLINE",
//       merchantName: "Shop Rigz",
//       merchantId: 1848716,
//     },
//     {
//       gatewayMerchantId: "119527",
//       channel: "ONLINE",
//       merchantName: "Trend Matters",
//       merchantId: 1720839,
//     },
//     {
//       gatewayMerchantId: "499537",
//       channel: "ONLINE",
//       merchantName: "Shop Nova",
//       merchantId: 2136041,
//     },
//     {
//       gatewayMerchantId: "559270",
//       channel: "ONLINE",
//       merchantName: "GoKotagiri Tourism",
//       merchantId: 4737191,
//     },
//     {
//       gatewayMerchantId: "716779",
//       channel: "ONLINE",
//       merchantName: "Veertrip",
//       merchantId: 2614642,
//     },
//     {
//       gatewayMerchantId: "541494",
//       channel: "ONLINE",
//       merchantName: "Ki and Kri Shopping Solutions",
//       merchantId: 1804428,
//     },
//     {
//       gatewayMerchantId: "701026",
//       channel: "ONLINE",
//       merchantName: "LOVE RIDE",
//       merchantId: 4737183,
//     },
//     {
//       gatewayMerchantId: "721387",
//       channel: "ONLINE",
//       merchantName: "Icegloos",
//       merchantId: 1848722,
//     },
//     {
//       gatewayMerchantId: "840023",
//       channel: "ONLINE",
//       merchantName: "Flynote",
//       merchantId: 2185686,
//     },
//   ],
// };

// const items = [];

// for (let i = 0; i < merchant.data.length; i++) {
//   merchant.data[i].id = i;
// }

// const handleOnSearch = (string, results) => {
//   // onSearch will have as the first callback parameter
//   // the string searched and for the second the results.
//   console.log(string, results);
// };

// const handleOnHover = (result) => {
//   // the item hovered
//   console.log(result);
// };

// const handleOnFocus = () => {
//   console.log("Focused");
// };

// const handleOnClear = () => {
//   console.log("Cleared");
// };

// const formatResult = (item) => {
//   return (
//     <>
//       <span style={{ display: "block", textAlign: "left" }}>
//         {item.merchantName}
//       </span>
//     </>
//   );
// };