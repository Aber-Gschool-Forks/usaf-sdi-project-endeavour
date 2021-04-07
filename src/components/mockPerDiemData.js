// This is a mock of :
//https://api.gsa.gov/travel/perdiem/v2/rates/city/Fairfax/state/VA/year/2019?api_key=AgMo9KU7DfHFqTDXcAqse6udTXn6knH6uCLOh4K2
// The data is for Fairfax VA in the year 2019
// What we want to grab is rates[0].rate[0].meals

const PerDiemCityState = [
  {
    request: null,
    errors: null,
    rates: [
      {
        oconusInfo: null,
        rate: [
          {
            months: {
              month: [
                {
                  value: 181,
                  number: 1,
                  short: "Jan",
                  long: "January",
                },
                {
                  value: 181,
                  number: 2,
                  short: "Feb",
                  long: "February",
                },
                {
                  value: 251,
                  number: 3,
                  short: "Mar",
                  long: "March",
                },
                {
                  value: 251,
                  number: 4,
                  short: "Apr",
                  long: "April",
                },
                {
                  value: 251,
                  number: 5,
                  short: "May",
                  long: "May",
                },
                {
                  value: 251,
                  number: 6,
                  short: "Jun",
                  long: "June",
                },
                {
                  value: 179,
                  number: 7,
                  short: "Jul",
                  long: "July",
                },
                {
                  value: 179,
                  number: 8,
                  short: "Aug",
                  long: "August",
                },
                {
                  value: 251,
                  number: 9,
                  short: "Sep",
                  long: "September",
                },
                {
                  value: 251,
                  number: 10,
                  short: "Oct",
                  long: "October",
                },
                {
                  value: 181,
                  number: 11,
                  short: "Nov",
                  long: "November",
                },
                {
                  value: 181,
                  number: 12,
                  short: "Dec",
                  long: "December",
                },
              ],
            },
            meals: 76,
            zip: null,
            county:
              "Washington DC (also the cities of Alexandria, Falls Church and Fairfax, and the counties of Arlington and Fairfax, in Virginia; and the counties of Montgomery and Prince George's in Maryland)",
            city: "District of Columbia",
            standardRate: "false",
          },
          {
            months: {
              month: [
                {
                  value: 107,
                  number: 1,
                  short: "Jan",
                  long: "January",
                },
                {
                  value: 107,
                  number: 2,
                  short: "Feb",
                  long: "February",
                },
                {
                  value: 107,
                  number: 3,
                  short: "Mar",
                  long: "March",
                },
                {
                  value: 107,
                  number: 4,
                  short: "Apr",
                  long: "April",
                },
                {
                  value: 107,
                  number: 5,
                  short: "May",
                  long: "May",
                },
                {
                  value: 107,
                  number: 6,
                  short: "Jun",
                  long: "June",
                },
                {
                  value: 107,
                  number: 7,
                  short: "Jul",
                  long: "July",
                },
                {
                  value: 107,
                  number: 8,
                  short: "Aug",
                  long: "August",
                },
                {
                  value: 107,
                  number: 9,
                  short: "Sep",
                  long: "September",
                },
                {
                  value: 107,
                  number: 10,
                  short: "Oct",
                  long: "October",
                },
                {
                  value: 107,
                  number: 11,
                  short: "Nov",
                  long: "November",
                },
                {
                  value: 107,
                  number: 12,
                  short: "Dec",
                  long: "December",
                },
              ],
            },
            meals: 61,
            zip: null,
            county: "Loudoun",
            city: "Loudoun",
            standardRate: "false",
          },
        ],
        state: "VA",
        year: 2019,
        isOconus: "false",
      },
    ],
    version: null,
  },
];
