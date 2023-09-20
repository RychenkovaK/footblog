const recipes = [
	{
		name: "Пицца 0-50 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "400",
		calories: "18",
		caloriesType: "0-50"
	},
	{
		name: "Пицца 0-50 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "500",
		calories: "46",
		caloriesType: "0-50"
	},
	{
		name: "Пицца 0-50 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "750",
		calories: "48",
		caloriesType: "0-50"
	},
	{
		name: "Пицца 0-50 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "1000",
		calories: "44",
		caloriesType: "0-50"
	},
	{
		name: "Стейк 0-50 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "200",
		calories: "24",
		caloriesType: "0-50"
	},
	{
		name: "Бургер 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "250",
		calories: "72",
		caloriesType: "50-75"
	},
	{
		name: "Бургер 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "400",
		calories: "64",
		caloriesType: "50-75"
	},
	{
		name: "Бургер 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "500",
		calories: "58",
		caloriesType: "50-75"
	},
	{
		name: "Бургер 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "750",
		calories: "60",
		caloriesType: "50-75"
	},
	{
		name: "Бургер 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "1000",
		calories: "53",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "200",
		calories: "64",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "250",
		calories: "64",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "400",
		calories: "72",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "500",
		calories: "51",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "750",
		calories: "66",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "1000",
		calories: "70",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "200",
		calories: "60",
		caloriesType: "50-75"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "500",
		calories: "98",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Пицца",
		mass: "1000",
		calories: "99",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "200",
		calories: "79",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "250",
		calories: "84",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "400",
		calories: "79",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "500",
		calories: "76",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "750",
		calories: "92",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Завтрак",
		eatClass: "Стейк",
		mass: "1000",
		calories: "99",
		caloriesType: "75-100"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "200",
		calories: "133",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "250",
		calories: "131",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "400",
		calories: "116",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "500",
		calories: "132",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "750",
		calories: "147",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Суп",
		mass: "1000",
		calories: "125",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Салат",
		mass: "200",
		calories: "113",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Салат",
		mass: "250",
		calories: "139",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Салат",
		mass: "400",
		calories: "101",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Салат",
		mass: "500",
		calories: "113",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Салат",
		mass: "750",
		calories: "111",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Салат",
		mass: "1000",
		calories: "133",
		caloriesType: "100-150"
	},
	{
		name: "Бургер 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "200",
		calories: "104",
		caloriesType: "100-150"
	},
	{
		name: "Бургер 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "250",
		calories: "124",
		caloriesType: "100-150"
	},
	{
		name: "Бургер 100-150 калориев",
		eating: "Завтрак",
		eatClass: "Бургер",
		mass: "400",
		calories: "147",
		caloriesType: "100-150"
	},
	{
		name: "Суп 0-50 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "250",
		calories: "34",
		caloriesType: "0-50"
	},
	{
		name: "Суп 0-50 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "400",
		calories: "5",
		caloriesType: "0-50"
	},
	{
		name: "Суп 0-50 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "500",
		calories: "7",
		caloriesType: "0-50"
	},
	{
		name: "Бургер 0-50 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "500",
		calories: "4",
		caloriesType: "0-50"
	},
	{
		name: "Бургер 0-50 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "750",
		calories: "25",
		caloriesType: "0-50"
	},
	{
		name: "Бургер 0-50 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "1000",
		calories: "21",
		caloriesType: "0-50"
	},
	{
		name: "Пицца 0-50 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "200",
		calories: "34",
		caloriesType: "0-50"
	},
	{
		name: "Пицца 0-50 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "250",
		calories: "12",
		caloriesType: "0-50"
	},
	{
		name: "Суп 50-75 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "200",
		calories: "62",
		caloriesType: "50-75"
	},
	{
		name: "Суп 50-75 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "250",
		calories: "64",
		caloriesType: "50-75"
	},
	{
		name: "Суп 50-75 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "400",
		calories: "58",
		caloriesType: "50-75"
	},
	{
		name: "Суп 50-75 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "500",
		calories: "53",
		caloriesType: "50-75"
	},
	{
		name: "Суп 50-75 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "750",
		calories: "60",
		caloriesType: "50-75"
	},
	{
		name: "Суп 50-75 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "1000",
		calories: "72",
		caloriesType: "50-75"
	},
	{
		name: "Салат 50-75 калориев",
		eating: "Обед",
		eatClass: "Салат",
		mass: "200",
		calories: "65",
		caloriesType: "50-75"
	},
	{
		name: "Салат 50-75 калориев",
		eating: "Обед",
		eatClass: "Салат",
		mass: "250",
		calories: "66",
		caloriesType: "50-75"
	},
	{
		name: "Салат 50-75 калориев",
		eating: "Обед",
		eatClass: "Салат",
		mass: "400",
		calories: "53",
		caloriesType: "50-75"
	},
	{
		name: "Бургер 50-75 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "1000",
		calories: "70",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "200",
		calories: "71",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "250",
		calories: "59",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "400",
		calories: "69",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "500",
		calories: "67",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "750",
		calories: "54",
		caloriesType: "50-75"
	},
	{
		name: "Пицца 50-75 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "1000",
		calories: "58",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "200",
		calories: "63",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "250",
		calories: "65",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "400",
		calories: "73",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "500",
		calories: "74",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "750",
		calories: "56",
		caloriesType: "50-75"
	},
	{
		name: "Стейк 50-75 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "1000",
		calories: "70",
		caloriesType: "50-75"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "200",
		calories: "97",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "250",
		calories: "83",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "400",
		calories: "81",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "500",
		calories: "77",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "750",
		calories: "79",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "1000",
		calories: "94",
		caloriesType: "75-100"
	},
	{
		name: "Бургер 75-100 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "250",
		calories: "88",
		caloriesType: "75-100"
	},
	{
		name: "Бургер 75-100 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "400",
		calories: "93",
		caloriesType: "75-100"
	},
	{
		name: "Бургер 75-100 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "500",
		calories: "86",
		caloriesType: "75-100"
	},
	{
		name: "Бургер 75-100 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "750",
		calories: "88",
		caloriesType: "75-100"
	},
	{
		name: "Бургер 75-100 калориев",
		eating: "Обед",
		eatClass: "Бургер",
		mass: "1000",
		calories: "85",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "200",
		calories: "84",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "250",
		calories: "87",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "400",
		calories: "76",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "500",
		calories: "82",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "750",
		calories: "95",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "1000",
		calories: "88",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "200",
		calories: "85",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "250",
		calories: "94",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "400",
		calories: "87",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "500",
		calories: "84",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "750",
		calories: "83",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "1000",
		calories: "92",
		caloriesType: "75-100"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "200",
		calories: "120",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "250",
		calories: "123",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "400",
		calories: "125",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "500",
		calories: "108",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "750",
		calories: "132",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Обед",
		eatClass: "Суп",
		mass: "1000",
		calories: "141",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Обед",
		eatClass: "Салат",
		mass: "200",
		calories: "146",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Обед",
		eatClass: "Салат",
		mass: "250",
		calories: "126",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Обед",
		eatClass: "Салат",
		mass: "400",
		calories: "146",
		caloriesType: "100-150"
	},
	{
		name: "Пицца 100-150 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "400",
		calories: "126",
		caloriesType: "100-150"
	},
	{
		name: "Пицца 100-150 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "500",
		calories: "106",
		caloriesType: "100-150"
	},
	{
		name: "Пицца 100-150 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "750",
		calories: "121",
		caloriesType: "100-150"
	},
	{
		name: "Пицца 100-150 калориев",
		eating: "Обед",
		eatClass: "Пицца",
		mass: "1000",
		calories: "101",
		caloriesType: "100-150"
	},
	{
		name: "Стейк 100-150 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "200",
		calories: "117",
		caloriesType: "100-150"
	},
	{
		name: "Стейк 100-150 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "250",
		calories: "108",
		caloriesType: "100-150"
	},
	{
		name: "Стейк 100-150 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "400",
		calories: "142",
		caloriesType: "100-150"
	},
	{
		name: "Стейк 100-150 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "500",
		calories: "106",
		caloriesType: "100-150"
	},
	{
		name: "Стейк 100-150 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "750",
		calories: "146",
		caloriesType: "100-150"
	},
	{
		name: "Стейк 100-150 калориев",
		eating: "Обед",
		eatClass: "Стейк",
		mass: "1000",
		calories: "110",
		caloriesType: "100-150"
	},
	{
		name: "Суп 0-50 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "200",
		calories: "6",
		caloriesType: "0-50"
	},
	{
		name: "Суп 0-50 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "250",
		calories: "34",
		caloriesType: "0-50"
	},
	{
		name: "Салат 0-50 калориев",
		eating: "Ужин",
		eatClass: "Салат",
		mass: "200",
		calories: "8",
		caloriesType: "0-50"
	},
	{
		name: "Салат 0-50 калориев",
		eating: "Ужин",
		eatClass: "Салат",
		mass: "250",
		calories: "12",
		caloriesType: "0-50"
	},
	{
		name: "Салат 0-50 калориев",
		eating: "Ужин",
		eatClass: "Салат",
		mass: "400",
		calories: "48",
		caloriesType: "0-50"
	},
	{
		name: "Салат 0-50 калориев",
		eating: "Ужин",
		eatClass: "Салат",
		mass: "500",
		calories: "15",
		caloriesType: "0-50"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "400",
		calories: "78",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "500",
		calories: "94",
		caloriesType: "75-100"
	},
	{
		name: "Суп 75-100 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "750",
		calories: "84",
		caloriesType: "75-100"
	},
	{
		name: "Пицца 75-100 калориев",
		eating: "Ужин",
		eatClass: "Пицца",
		mass: "400",
		calories: "86",
		caloriesType: "75-100"
	},
	{
		name: "Стейк 75-100 калориев",
		eating: "Ужин",
		eatClass: "Стейк",
		mass: "1000",
		calories: "79",
		caloriesType: "75-100"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "500",
		calories: "121",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "750",
		calories: "112",
		caloriesType: "100-150"
	},
	{
		name: "Суп 100-150 калориев",
		eating: "Ужин",
		eatClass: "Суп",
		mass: "1000",
		calories: "135",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Ужин",
		eatClass: "Салат",
		mass: "200",
		calories: "141",
		caloriesType: "100-150"
	},
	{
		name: "Салат 100-150 калориев",
		eating: "Ужин",
		eatClass: "Салат",
		mass: "250",
		calories: "141",
		caloriesType: "100-150"
	},
	{
		name: "Бургер 100-150 калориев",
		eating: "Ужин",
		eatClass: "Бургер",
		mass: "1000",
		calories: "119",
		caloriesType: "100-150"
	},
	{
		name: "Бургер 100-150 калориев",
		eating: "Ужин",
		eatClass: "Бургер",
		mass: "1000",
		calories: "119",
		caloriesType: "100-150"
	}
]

const properties = {
	'eating': "Время приема пищи",
	'eatClass': "Разновидность продукта",
	'mass': "Вес",
	'caloriesType': "Калорийность",
};

function printRecipes( arRecipes, selector ) {

	const lileTemplate = 
	`
	<div class="item__block__content__main__2 item">
		<div class="left1__inner__item__block1__content__main__2">
			<div class="categories__left">
				<img src="{{srcLine}}" alt="dlfjlsad">
			</div>
		</div>
		<div class="inner1__item__block3__content__main__2">
			<div class="top">
					<p class="name">{{name}}</p>
					<p class="property"><span class="title">Время приема пищи:</span> {{eating}}</p>
					<p class="property"><span class="title">Вес:</span>{{mass}}</p>
					<p class="property"><span class="title">Каллорийность:</span>{{calories}}</p>
			</div>
			<div class="down__green">
				<h2>{{eatClass}}</h2>
			</div>
		</div>
	</div>
	`
	;
	
	let output = '';
	for (let item of arRecipes) {
		let tmpLine;
		let srcLine;
		switch(item.eatClass) {
			case 'Пицца':
				srcLine="images/pizza.jpg";
				break;
			case 'Стейк':
				srcLine="images/steak.png";
				break;
			case 'Бургер':
				srcLine="images/burger.jpg";
				break;
			case 'Суп':
				srcLine="images/soup.png";
				break;
			case 'Салат':
				srcLine="images/salad.png";
				break;
		}
		tmpLine = lileTemplate.replace('{{name}}', item.name);
		tmpLine = tmpLine.replace('{{eating}}', item.eating);
		tmpLine = tmpLine.replace('{{eatClass}}', item.eatClass);
		tmpLine = tmpLine.replace('{{mass}}', item.mass);
		tmpLine = tmpLine.replace('{{calories}}', item.calories);
		tmpLine = tmpLine.replace('{{srcLine}}', srcLine);
		output += tmpLine;
	};

	$(selector).html(output);
}

function printFilters( arRecipes, arProperties, selector ) {

	const startTemplate = '<div class="element"><h3>{{name}}</h3>';
	const lileTemplate = '<label><input type="checkbox" name="{{prop}}" value="{{name}}">{{name}}</label>';
	const endTemplate = '';

	let output = '';
	for (let prop in arProperties) {
		
		let tmpLine = startTemplate.replace('{{name}}', arProperties[prop]);
		let vals = [];
		for (let film of recipes) {
			if (!vals.includes(film[prop])) {
				vals.push(film[prop]);
			}
		}
		//vals.sort();
		vals.forEach(function(item, index, array) {
			tmpLine += lileTemplate.replace("{{prop}}", prop ).replaceAll("{{name}}",item);	
		});

		output += tmpLine + '</div>';
	};

	output += endTemplate;
	$(selector).html(output);
}

function readCurFilters(selector, properties) {

	let result = [];
	for (let prop in properties) {
		result.push(prop);
		let searchIDs = $("#filters input[name='"+prop+"']:checkbox:checked").map(function(){
			return $(this).val();
		}).get(); 
		result[prop] = searchIDs;
	}
	return result;
}

function applyFiltersBase(data, filter, properties){
	let result = [];
	for (let wear of data) {
		let ok = true;
		for (let prop in properties) {
			if (filter[prop].length && filter[prop].indexOf(wear[prop]) == -1)
				ok = false;
		}
		if (ok) {
			result.push(wear);
		};
	}

	return result;
}

function applyFilters(data, filter, properties) {
	result = applyFiltersBase(data, filter, properties);

	//проверяем список не выбранных и выбранных фильтров
	for (let prop in properties) {
		for (let item of $("#filters input[name='"+prop+"']")){
			if (!$(item).prop("checked")){
				//если при добавлении result.len = 0, то выключаем
				filter[prop].push($(item).val());
				console.log(filter);
				result_tmp = applyFiltersBase(data, filter, properties);
				filter[prop].pop();

				if (result_tmp.length == 0 || result_tmp.length == result.length){
					$(item).prop("disabled", true);
					$(item).prop("checked", false);
				} else {
					$(item).prop("disabled", false);
					$(item).prop("checked", false);
				}
			} else {
				filter[prop].splice(filter[prop].indexOf($(item).val()), 1);

				console.log(filter);

				result_tmp = applyFiltersBase(data, filter, properties);

				filter[prop].push($(item).val());

				if (result_tmp.length == 0 || result_tmp.length == result.length){
					$(item).prop("disabled", true);
				} else {
					$(item).prop("disabled", false);
				}
			}
		}
	}
	return result;
}

$(document).ready(function()
{
	let curFilter = readCurFilters('#filters input', properties);
	let filtredWears = applyFilters( recipes, curFilter, properties);

	printRecipes( recipes, '#elements' );
	printFilters( recipes, properties, '#filters' );
	$('#filters input').change(function()
	{
		let curFilter = readCurFilters('#filters input', properties);
		let filtredWears = applyFilters( recipes, curFilter, properties);
		printRecipes( filtredWears, '#elements' );
	});
});