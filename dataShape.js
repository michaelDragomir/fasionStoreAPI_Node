const salesTax = [
	{
		state: 'Alabama',
		taxRate: 0.09289,
	},
	{
		state: 'Alaska',
		taxRate: 0.01821,
	},
	{
		state: 'Arizona',
		taxRate: 0.08379,
	},
	{
		state: 'Arkansas',
		taxRate: 0.09448,
	},
	{
		state: 'California',
		taxRate: 0.08851,
	},
	{
		state: 'Colorado',
		taxRate: 0.07807,
	},
	{
		state: 'Connecticut',
		taxRate: 0.0635,
	},
	{
		state: 'Delaware',
		taxRate: 0.0,
	},
	{
		state: 'District of Columbia',
		taxRate: 0.06,
	},
	{
		state: 'Florida',
		taxRate: 0.07002,
	},
	{
		state: 'Georgia',
		taxRate: 0.07384,
	},
	{
		state: 'Hawaii',
		taxRate: 0.045,
	},
	{
		state: 'Idaho',
		taxRate: 0.06026,
	},
	{
		state: 'Illinois',
		taxRate: 0.08855,
	},
	{
		state: 'Indiana',
		taxRate: 0.07,
	},
	{
		state: 'Iowa',
		taxRate: 0.06941,
	},
	{
		state: 'Kansas',
		taxRate: 0.08654,
	},
	{
		state: 'Kentucky',
		taxRate: 0.06,
	},
	{
		state: 'Louisiana',
		taxRate: 0.09563,
	},
	{
		state: 'Maine',
		taxRate: 0.055,
	},
	{
		state: 'Maryland',
		taxRate: 0.06,
	},
	{
		state: 'Massachusetts',
		taxRate: 0.0625,
	},
	{
		state: 'Michigan',
		taxRate: 0.06,
	},
	{
		state: 'Minnesota',
		taxRate: 0.08038,
	},
	{
		state: 'Mississippi',
		taxRate: 0.07062,
	},
	{
		state: 'Missouri',
		taxRate: 0.08385,
	},
	{
		state: 'Montana',
		taxRate: 0.0,
	},
	{
		state: 'Nebraska',
		taxRate: 0.06968,
	},
	{
		state: 'Nevada',
		taxRate: 0.08236,
	},
	{
		state: 'New Hampshire',
		taxRate: 0.0,
	},
	{
		state: 'New Jersey',
		taxRate: 0.06601,
	},
	{
		state: 'New Mexico',
		taxRate: 0.07617,
	},
	{
		state: 'New York',
		taxRate: 0.08532,
	},
	{
		state: 'North Carolina',
		taxRate: 0.06996,
	},
	{
		state: 'North Dakota',
		taxRate: 0.07041,
	},
	{
		state: 'Ohio',
		taxRate: 0.07238,
	},
	{
		state: 'Oklahoma',
		taxRate: 0.08989,
	},
	{
		state: 'Oregon',
		taxRate: 0.0,
	},
	{
		state: 'Pennsylvania',
		taxRate: 0.06341,
	},
	{
		state: 'Rhode Island',
		taxRate: 0.07,
	},
	{
		state: 'South Carolina',
		taxRate: 0.07499,
	},
	{
		state: 'South Dakota',
		taxRate: 0.06111,
	},
	{
		state: 'Tennessee',
		taxRate: 0.09548,
	},
	{
		state: 'Texas',
		taxRate: 0.082,
	},
	{
		state: 'Utah',
		taxRate: 0.07249,
	},
	{
		state: 'Vermont',
		taxRate: 0.06359,
	},
	{
		state: 'Virginia',
		taxRate: 0.05771,
	},
	{
		state: 'Washington',
		taxRate: 0.09378,
	},
	{
		state: 'West Virginia',
		taxRate: 0.06567,
	},
	{
		state: 'Wisconsin',
		taxRate: 0.05696,
	},
	{
		state: 'Wyoming',
		taxRate: 0.05441,
	},
];

const allOuterwearColors = [
	{
		id: Number,
		type: 'outerwear',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'brown',
				hexColor: '#A52A2A',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'red',
				hexColor: '#FF0000',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
		],
	},
];

const allOuterwearSizes = [
	{
		id: Number,
		type: 'outerwear',
		sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allTopsColors = [
	{
		id: Number,
		type: 'tops',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'brown',
				hexColor: '#A52A2A',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'red',
				hexColor: '#FF0000',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
			{
				color: 'pink',
				hexColor: '#FFC0CB',
			},
			{
				color: 'printed',
				hexColor: '#FFF',
			},
		],
	},
];

const allTopsSizes = [
	{
		id: Number,
		type: 'tops',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allDressesSizes = [
	{
		id: Number,
		type: 'dresses',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allDressesColors = [
	{
		id: Number,
		type: 'dresses',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'brown',
				hexColor: '#A52A2A',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'metallic',
				hexColor: '#e5cf75',
			},
			{
				color: 'pink',
				hexColor: '#FFC0CB',
			},
			{
				color: 'printed',
				hexColor: '#FFF',
			},
			{
				color: 'red',
				hexColor: '#FF0000',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
			{
				color: 'yellow',
				hexColor: '#FFFF00',
			},
		],
	},
];

const allTShirtsColors = [
	{
		id: Number,
		type: 't-shirts',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'brown',
				hexColor: '#A52A2A',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'metallic',
				hexColor: '#e5cf75',
			},
			{
				color: 'pink',
				hexColor: '#FFC0CB',
			},
			{
				color: 'printed',
				hexColor: '#FFF',
			},
			{
				color: 'red',
				hexColor: '#FF0000',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
			{
				color: 'yellow',
				hexColor: '#FFFF00',
			},
		],
	},
];

const allTShirtsSizes = [
	{
		id: Number,
		type: 't-shirts',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allShirtsBlousesColors = [
	{
		id: Number,
		type: 't-shirts',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'brown',
				hexColor: '#A52A2A',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'metallic',
				hexColor: '#e5cf75',
			},
			{
				color: 'pink',
				hexColor: '#FFC0CB',
			},
			{
				color: 'printed',
				hexColor: '#FFF',
			},
			{
				color: 'red',
				hexColor: '#FF0000',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
			{
				color: 'yellow',
				hexColor: '#FFFF00',
			},
		],
	},
];

const allShirtsBlousesSizes = [
	{
		id: Number,
		type: 't-shirts',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allSweatersCardigensSizes = [
	{
		id: Number,
		type: 't-shirts',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allSweatersCardigensColors = [
	{
		id: Number,
		type: 't-shirts',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'brown',
				hexColor: '#A52A2A',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'metallic',
				hexColor: '#e5cf75',
			},
			{
				color: 'pink',
				hexColor: '#FFC0CB',
			},
			{
				color: 'printed',
				hexColor: '#FFF',
			},
			{
				color: 'red',
				hexColor: '#FF0000',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
			{
				color: 'yellow',
				hexColor: '#FFFF00',
			},
		],
	},
];

const allSweatershirtsSizes = [
	{
		id: Number,
		type: 't-shirts',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allSweatershirtsColors = [
	{
		id: Number,
		type: 't-shirts',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
		],
	},
];

const allVestsSizes = [
	{
		id: Number,
		type: 't-shirts',
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
	},
];

const allVestsColors = [
	{
		id: Number,
		type: 't-shirts',
		colors: [
			{
				color: 'beige',
				hexColor: '#F5F5DC',
			},
			{
				color: 'black',
				hexColor: '#000',
			},
			{
				color: 'blue',
				hexColor: '#0000FF',
			},
			{
				color: 'green',
				hexColor: '#008000',
			},
			{
				color: 'gray',
				hexColor: '#808080',
			},
			{
				color: 'white',
				hexColor: '#FFF',
			},
		],
	},
];

const RESULTS = [
	{
		clothing: {
			products: [
				//OUTERWEAR: JACKETS, BLAZERS, COATS.
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //jackets, coats, blazers
					subType: STRING, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']
					style: [], //["vintage", "boho", "preppy", "modern", 'classic', 'traditional', 'streetwear', 'grunge', 'casual', 'party']
					fit: STRING,
					fabric: STRING,
					pattern: STRING,
					hasPattern: Boolean, //set to false
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: true, //use this to display certain availableSizess out of stock or certian colors out of stock etc.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					isComingSoon: false,
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
						},
					],
				},
				// TOPS: BODYSUITS, CROPTOPS
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'bodysuits, cropTops, halterTops'
					subType: STRING, //['sleeveless', 'long sleeves', 'cutOut']
					style: [],
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},
				// DRESSES
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'dresses'
					subType: STRING, //mini/midi/maxi/jumpsuit/shirt dresses/prints
					style: [],
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},
				// T-SHIRTS
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'t-shirts'
					subType: STRING, //short sleeve, long sleeve, basics, printed graphics, tank-tops, overavailableSizes
					style: [],
					collarType: [], // round-neck, v-neck, crew-neck
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},
				// SHIRTS & BLOUSES
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'shirt || blouse'
					subType: STRING, // [strips, printed, satin, dressshirt]
					style: [],
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},
				// sweaters & cardigans
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'sweater || cardigan'
					subType: STRING, //[buttonfront, round-neck, v-neck, open-front, turtle-nect]
					style: [],
					price: Number,
					name: STRING,
					description: STRING,
					colavailableColorsor: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},
				// sweatshirts
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'sweatshirt
					subType: STRING, // hoodie, shortsleave, long sleave, zipup, overavailableSizesd, printed cropped
					style: [],
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},

				// pants
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //'pants
					subType: STRING, // formal, wideleg, joggers, basic, high-waisted
					style: [],
					price: Number,
					name: STRING,
					description: STRING,
					availableColors: STRING,
					hexColor: STRING,
					availableSizes: [STRING],
					inStock: Boolean, //use this to display certain availableSizess out of stock or certian colors out of stock etc. Set to true.
					primaryImageUrl: STRING,
					secondaryImagesUrls: [STRING],
					fabricPrint: Boolean, //set to false
					productDetails: [{ STRING }], //? additional information
					availableOptions: [
						{
							id: Number,
							availableColors: STRING,
							hexColor: STRING,
							primaryImageUrl: STRING,
							secondaryImagesUrls: [STRING],
							availableSizes: [STRING], //availableSizess available for this option
							comingSoon: Boolean, //set to false.
						},
					],
				},
			],
		},
	},
];
