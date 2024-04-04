// const apidata = [
//   {
//     id: "bitcoin",
//     symbol: "btc",
//     name: "Bitcoin",
//     image:
//       "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//     current_price: 66395,
//     market_cap: 1305934790387,
//     market_cap_rank: 1,
//     fully_diluted_valuation: 1394028708692,
//     total_volume: 30536659025,
//     high_24h: 66945,
//     low_24h: 65135,
//     price_change_24h: 308.48,
//     price_change_percentage_24h: 0.46678,
//     market_cap_change_24h: 5696417299,
//     market_cap_change_percentage_24h: 0.43811,
//     circulating_supply: 19672931.0,
//     total_supply: 21000000.0,
//     max_supply: 21000000.0,
//     ath: 73738,
//     ath_change_percentage: -10.04827,
//     ath_date: "2024-03-14T07:10:36.635Z",
//     atl: 67.81,
//     atl_change_percentage: 97716.73419,
//     atl_date: "2013-07-06T00:00:00.000Z",
//     roi: null,
//     last_updated: "2024-04-04T10:53:24.005Z",
//   },
//   {
//     id: "ethereum",
//     symbol: "eth",
//     name: "Ethereum",
//     image:
//       "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
//     current_price: 3347.14,
//     market_cap: 401847202085,
//     market_cap_rank: 2,
//     fully_diluted_valuation: 401847202085,
//     total_volume: 13508348661,
//     high_24h: 3365.2,
//     low_24h: 3251.72,
//     price_change_24h: 30.61,
//     price_change_percentage_24h: 0.92291,
//     market_cap_change_24h: 3544079095,
//     market_cap_change_percentage_24h: 0.88979,
//     circulating_supply: 120068372.18484,
//     total_supply: 120068372.18484,
//     max_supply: null,
//     ath: 4878.26,
//     ath_change_percentage: -31.42452,
//     ath_date: "2021-11-10T14:24:19.604Z",
//     atl: 0.432979,
//     atl_change_percentage: 772522.14263,
//     atl_date: "2015-10-20T00:00:00.000Z",
//     roi: {
//       times: 66.41519840603432,
//       currency: "btc",
//       percentage: 6641.519840603432,
//     },
//     last_updated: "2024-04-04T10:53:32.212Z",
//   },
//   {
//     id: "tether",
//     symbol: "usdt",
//     name: "Tether",
//     image:
//       "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
//     current_price: 1.0,
//     market_cap: 106172074660,
//     market_cap_rank: 3,
//     fully_diluted_valuation: 106172074660,
//     total_volume: 58625562877,
//     high_24h: 1.003,
//     low_24h: 0.995522,
//     price_change_24h: 0.00015299,
//     price_change_percentage_24h: 0.0153,
//     market_cap_change_24h: 1032941465,
//     market_cap_change_percentage_24h: 0.98245,
//     circulating_supply: 106149786847.074,
//     total_supply: 106149786847.074,
//     max_supply: null,
//     ath: 1.32,
//     ath_change_percentage: -24.44679,
//     ath_date: "2018-07-24T00:00:00.000Z",
//     atl: 0.572521,
//     atl_change_percentage: 74.60338,
//     atl_date: "2015-03-02T00:00:00.000Z",
//     roi: null,
//     last_updated: "2024-04-04T10:51:25.342Z",
//   },
//   {
//     id: "binancecoin",
//     symbol: "bnb",
//     name: "BNB",
//     image:
//       "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
//     current_price: 587.84,
//     market_cap: 90404556185,
//     market_cap_rank: 4,
//     fully_diluted_valuation: 90404556185,
//     total_volume: 2004370207,
//     high_24h: 587.59,
//     low_24h: 551.16,
//     price_change_24h: 29.62,
//     price_change_percentage_24h: 5.30628,
//     market_cap_change_24h: 4445929794,
//     market_cap_change_percentage_24h: 5.17217,
//     circulating_supply: 153856150.0,
//     total_supply: 153856150.0,
//     max_supply: 200000000.0,
//     ath: 686.31,
//     ath_change_percentage: -14.60582,
//     ath_date: "2021-05-10T07:24:17.097Z",
//     atl: 0.0398177,
//     atl_change_percentage: 1471772.90088,
//     atl_date: "2017-10-19T00:00:00.000Z",
//     roi: null,
//     last_updated: "2024-04-04T10:53:41.213Z",
//   },
//   {
//     id: "solana",
//     symbol: "sol",
//     name: "Solana",
//     image:
//       "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
//     current_price: 185.76,
//     market_cap: 82604528079,
//     market_cap_rank: 5,
//     fully_diluted_valuation: 106446075251,
//     total_volume: 4314910574,
//     high_24h: 191.16,
//     low_24h: 180.32,
//     price_change_24h: -2.145097242510417,
//     price_change_percentage_24h: -1.14157,
//     market_cap_change_24h: -1017284339.4181519,
//     market_cap_change_percentage_24h: -1.21653,
//     circulating_supply: 444812027.278865,
//     total_supply: 573194903.827329,
//     max_supply: null,
//     ath: 259.96,
//     ath_change_percentage: -28.62559,
//     ath_date: "2021-11-06T21:54:35.825Z",
//     atl: 0.500801,
//     atl_change_percentage: 36949.51078,
//     atl_date: "2020-05-11T19:35:23.449Z",
//     roi: null,
//     last_updated: "2024-04-04T10:53:43.969Z",
//   },
//   {
//     id: "usd-coin",
//     symbol: "usdc",
//     name: "USDC",
//     image:
//       "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
//     current_price: 1.001,
//     market_cap: 33021846553,
//     market_cap_rank: 6,
//     fully_diluted_valuation: 32971024788,
//     total_volume: 10340963795,
//     high_24h: 1.004,
//     low_24h: 0.995656,
//     price_change_24h: 0.00112471,
//     price_change_percentage_24h: 0.11253,
//     market_cap_change_24h: 226221518,
//     market_cap_change_percentage_24h: 0.68979,
//     circulating_supply: 33006368746.4603,
//     total_supply: 32955570802.0054,
//     max_supply: null,
//     ath: 1.17,
//     ath_change_percentage: -14.7928,
//     ath_date: "2019-05-08T00:40:28.300Z",
//     atl: 0.877647,
//     atl_change_percentage: 13.85335,
//     atl_date: "2023-03-11T08:02:13.981Z",
//     roi: null,
//     last_updated: "2024-04-04T10:54:05.857Z",
//   },
//   {
//     id: "staked-ether",
//     symbol: "steth",
//     name: "Lido Staked Ether",
//     image:
//       "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
//     current_price: 3340.25,
//     market_cap: 31918689716,
//     market_cap_rank: 7,
//     fully_diluted_valuation: 31918885179,
//     total_volume: 82195235,
//     high_24h: 3358.88,
//     low_24h: 3248.32,
//     price_change_24h: 32.2,
//     price_change_percentage_24h: 0.97334,
//     market_cap_change_24h: 231802173,
//     market_cap_change_percentage_24h: 0.73154,
//     circulating_supply: 9555745.61569146,
//     total_supply: 9555804.13314219,
//     max_supply: null,
//     ath: 4829.57,
//     ath_change_percentage: -30.8801,
//     ath_date: "2021-11-10T14:40:47.256Z",
//     atl: 482.9,
//     atl_change_percentage: 591.28609,
//     atl_date: "2020-12-22T04:08:21.854Z",
//     roi: null,
//     last_updated: "2024-04-04T10:53:55.603Z",
//   },
//   {
//     id: "ripple",
//     symbol: "xrp",
//     name: "XRP",
//     image:
//       "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
//     current_price: 0.576487,
//     market_cap: 31665248355,
//     market_cap_rank: 8,
//     fully_diluted_valuation: 57626469906,
//     total_volume: 1538001493,
//     high_24h: 0.58783,
//     low_24h: 0.56334,
//     price_change_24h: -0.01063736003919824,
//     price_change_percentage_24h: -1.81177,
//     market_cap_change_24h: -604355783.9724731,
//     market_cap_change_percentage_24h: -1.87283,
//     circulating_supply: 54942400126.0,
//     total_supply: 99987738355.0,
//     max_supply: 100000000000.0,
//     ath: 3.4,
//     ath_change_percentage: -83.04879,
//     ath_date: "2018-01-07T00:00:00.000Z",
//     atl: 0.00268621,
//     atl_change_percentage: 21345.79309,
//     atl_date: "2014-05-22T00:00:00.000Z",
//     roi: null,
//     last_updated: "2024-04-04T10:54:11.889Z",
//   },
//   {
//     id: "dogecoin",
//     symbol: "doge",
//     name: "Dogecoin",
//     image:
//       "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
//     current_price: 0.181513,
//     market_cap: 26067367417,
//     market_cap_rank: 9,
//     fully_diluted_valuation: 26067833477,
//     total_volume: 2628151738,
//     high_24h: 0.184128,
//     low_24h: 0.171171,
//     price_change_24h: -0.002173144379909481,
//     price_change_percentage_24h: -1.18307,
//     market_cap_change_24h: -349887643.35089874,
//     market_cap_change_percentage_24h: -1.32447,
//     circulating_supply: 143743636383.705,
//     total_supply: 143746206383.705,
//     max_supply: null,
//     ath: 0.731578,
//     ath_change_percentage: -75.25196,
//     ath_date: "2021-05-08T05:08:23.458Z",
//     atl: 8.69e-5,
//     atl_change_percentage: 208235.32732,
//     atl_date: "2015-05-06T00:00:00.000Z",
//     roi: null,
//     last_updated: "2024-04-04T10:53:46.935Z",
//   },
//   {
//     id: "cardano",
//     symbol: "ada",
//     name: "Cardano",
//     image:
//       "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
//     current_price: 0.583321,
//     market_cap: 20582151089,
//     market_cap_rank: 10,
//     fully_diluted_valuation: 26257053508,
//     total_volume: 461659477,
//     high_24h: 0.58904,
//     low_24h: 0.561905,
//     price_change_24h: -0.004651183481674815,
//     price_change_percentage_24h: -0.79105,
//     market_cap_change_24h: -180861342.22847748,
//     market_cap_change_percentage_24h: -0.87107,
//     circulating_supply: 35274209222.0096,
//     total_supply: 45000000000.0,
//     max_supply: 45000000000.0,
//     ath: 3.09,
//     ath_change_percentage: -81.11354,
//     ath_date: "2021-09-02T06:00:10.474Z",
//     atl: 0.01925275,
//     atl_change_percentage: 2928.18174,
//     atl_date: "2020-03-13T02:22:55.044Z",
//     roi: null,
//     last_updated: "2024-04-04T10:53:53.933Z",
//   },
// ];

const container = document.getElementsByClassName("container")[0];
let apidata;
fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    apidata = data;
  })
  .then(() => {
    color();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// creating conatiner onload
function color() {
  apidata.forEach((element) => {
    create(element);
  });

  // setting Color to determine change of price
  const change_percentage =
    document.getElementsByClassName("change_percentage");
  const change_percentageArray = Array.from(change_percentage); // Convert HTMLCollection to array
  console.log(change_percentageArray);
  change_percentageArray.forEach((ele) => {
    if (ele.innerHTML.charAt(0) === "-") {
      ele.style.color = "tomato";
    }
  });
}

// creates row inside table container with provided crypto currency data
function create(obj) {
  let row = document.createElement("tr");
  row.innerHTML = `
            <td class="name">
              <img
                class="logo"
                src="${obj.image}"
                alt="" /><span>${obj.name}</span>
            </td>
            <td class="symbol">${obj.symbol}</td>
            <td class="current_price">$${obj.current_price}</td>
            <td class="volume">vol.${obj.total_volume}</td>
            <td class="change_percentage">${obj.price_change_percentage_24h}%</td>
            <td class="market_capital">Mkt Cap: $${obj.market_cap}</td>
    `;
  container.append(row);
}

const search = document.getElementById("search");
const by_mkt_value = document.getElementById("by_mkt_value");
const by_percentage = document.getElementById("by_percentage");

// feature search
search.addEventListener("input", (event) => {
  const info = search.value.trim().toLowerCase();

  if (event.inputType === "deleteContentBackward") {
    container.innerHTML = "";
    color();
    return;
  }

  const res = apidata.filter((ele) => {
    if (ele.name.toLowerCase() === info || ele.symbol.toLowerCase() === info) {
      return true;
    }
  });

  if (res.length > 0) {
    updateContainer(res);
  }
});

// updateContainer after sorting and searching
function updateContainer(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "No results found";
    return;
  }

  data.forEach((ele) => {
    create(ele);
  });

  // setting Color to determine change of price
  const change_percentage =
    document.getElementsByClassName("change_percentage");
  const change_percentageArray = Array.from(change_percentage); // Convert HTMLCollection to array
  console.log(change_percentageArray);
  change_percentageArray.forEach((ele) => {
    if (ele.innerHTML.charAt(0) === "-") {
      ele.style.color = "tomato";
    }
  });
}

// feature button for sorting by_mkt_value
let count = 0;
by_mkt_value.addEventListener("click", () => {
  count++;

  if (count % 2 == 0) {
    const res = apidata.sort((ele2, ele1) => {
      return Number(ele1.market_cap) - Number(ele2.market_cap);
    });
    updateContainer(res);
  } else {
    const res = apidata.sort((ele1, ele2) => {
      return Number(ele1.market_cap) - Number(ele2.market_cap);
    });
    updateContainer(res);
  }
});

// feature  button for sorting by_percentage
let count_percentage = 0;
by_percentage.addEventListener("click", () => {
  count_percentage++;

  if (count_percentage % 2 == 0) {
    const res = apidata.sort((ele2, ele1) => {
      return (
        Number(ele1.price_change_percentage_24h) -
        Number(ele2.price_change_percentage_24h)
      );
    });
    updateContainer(res);
  } else {
    const res = apidata.sort((ele1, ele2) => {
      return (
        Number(ele1.price_change_percentage_24h) -
        Number(ele2.price_change_percentage_24h)
      );
    });
    updateContainer(res);
  }
});
