import axios from 'axios';

const wyreApi = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 secs
});

export const reserveWyreOrder = async (
  amount: string,
  accountAddress: string,
  destCurrency: string,
  paymentMethod: string,
) => {

  const dest = `ethereum:${accountAddress}`;

  const data = {
    amount,
    dest,
    destCurrency,
    paymentMethod,
    referrerAccountId: 'AC_Z48ZYNZW3ZN',
    sourceCurrency: 'USD',
  };
  console.log(data, "DATA REQUEST");
  try {
    const wyreAuthToken = 'SK-QGN7R6W8-8UDP97RX-W6T2PYPW-3Y8EFEHV';
    const config = {
      headers: {
        Authorization: `Bearer ${wyreAuthToken}`,
      },
    };
    const response = await wyreApi.post(
      'https://api.testwyre.com/v3/orders/reserve',
      data,
      config,
    );
    return response?.data;
  } catch (error) {
    console.log(error, 'EROR FROM API');
    return null;
  }
};
