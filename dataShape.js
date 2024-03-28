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

const allSweaterShirtsVestsColors = [
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

// dresses, sweaters, cardigens, t-shirts, shirts/blouses, skirts
const allColors = [
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

const allSizes = {
	women: {
		bottoms: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
		tops: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'], //dresses, tops, tshirts, shirts/blouses, sweaters/cardigens/sweatershirts?, vests, outerwear
		shos: [],
		accessories: [], //is this needed?
	},
	men: {
		//fix
		bottoms: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
		tops: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
		shos: [],
	},
	kids: {
		//fix
		bottoms: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
		tops: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
		shos: [],
	},
};

const colors = {
	// color objs here...
};

women: {
	bags: [{}];
	clothes: [{}];
	shoes: [{}];
}
const RESULTS = [
	{
		stateSalesTax: [
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
		],

		reviews: {
			//what about shoes, bags, accessories?
			women: [
				{
					id: 1,
					productId: NUM, //SAME AS ID OF PRODUCT
					type: STRING, //jackets, coats, blazers, skirts
					subType: STRING, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']
					rating: 5,
					reviewText: 'Great jacket! Fits perfectly and looks stylish.',
					reviewer: 'John Doe',
				},
			],
			men: [
				{
					id: 1,
					productId: NUM, //SAME AS ID OF PRODUCT
					type: STRING, //jackets, coats, blazers, skirts
					subType: STRING, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']
					rating: 5,
					reviewText: 'Great jacket! Fits perfectly and looks stylish.',
					reviewer: 'John Doe',
				},
			],
			kids: [
				{
					id: 1,
					productId: NUM, //SAME AS ID OF PRODUCT
					type: STRING, //jackets, coats, blazers, skirts
					subType: STRING, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']
					rating: 5,
					reviewText: 'Great jacket! Fits perfectly and looks stylish.',
					reviewer: 'John Doe',
				},
			],
		},
		clothing: {
			products: [
				//OUTERWEAR: JACKETS, BLAZERS, COATS.
				{
					id: Number,
					category: STRING, //'women'
					type: STRING, //jackets, coats, blazers, skirts
					subType: STRING, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']
					name: STRING,
					description: STRING,
					price: Number,
					stylesDetail: {
						type: [], //["vintage", "boho", "preppy", "modern", 'classic', 'traditional', 'streetwear', 'grunge', 'casual', 'party', 'daily', 'romantic']
						fit: STRING, //loose fit, oversized fit, regular fit, Skinny Fit, Slim Fit, Straight Fit, Wide Leg, Bootcut fit, Flare fit, Relaxed Fit
						color: 'blue',
						hexValue: '#000AAA',
						hasPattern: false,
						pattern: STRING, //Solid, Striped, Plaid, Floral, polka dot
					},
					size: [STRING],
					rating: Number,
					availability: {
						inStock: true,
						quantity: Number,
						restockDate: STRING,
						sku: NUM, //ABC-12345-BLK-S
					},
					images: {
						primary: STRING,
						secondary: [STRINGS],
					},
					productDetails: {
						detail: STRING, //Pleated, Distressed,front zipper,Pockets
						sleeveLength: STRING, //(e.g., "short sleeve", "long sleeve"), sleeveless, 3/4 sleeve,
						neckLine: STRING, //(e.g., "crew neck", "v-neck")Button-down Collar, Spread Collar, Mandarin Collar, V-neck, Scoop Neck, round-next, high-neck
						rise: STRING, //"high-rise", "mid-rise", "low-rise")
						length: STRING, //length: (for pants/skirts – "ankle", "full length"), Full length, Cropped, Ankle length, Capri
						fabric: STRING, //'100% Polyester',Denim, Silk, Cotton, Linen, Polyester, Leather (or faux leather), Stretch blends, fleece, wool, cashmere, alpaca,
						careInstructions:
							'Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Cool iron if needed.',
						sizeGuide: 'Refer to the size chart below for accurate sizing.',
						styleFeatures:
							'Adjustable drawstring hood, snap button cuffs, flap pockets, hidden zip closure.',
						closure: 'Front hidden zip and snap button closure.',
						designDetails:
							'Elastic drawstring hood, side elastic hem, snap button cuffs.',
						functionality:
							'Front flap pockets for storage, adjustable hem for a customized fit.',
						occasion:
							'Suitable for casual wear, outdoor activities, and everyday use.',
						brandInfo: {
							name: 'Example Brand',
							origin: 'United States',
							about:
								'Example Brand is committed to creating high-quality, stylish apparel for modern individuals. Our designs combine functionality, comfort, and fashion-forward aesthetics to meet the needs of our customers.',
						},
						additionalFeatures: 'Water-resistant fabric, UV protection.',
					},
					availableOptions: {
						availableSizes: [STRING],
						images: {
							primary: STRING,
							secondary: [STRINGS],
						},
						colorInfo: {
							name: STRING,
							hexValue: STRING,
						},
					},
				},
			],
		},
		shoes: {
			products: [],
		},
	},
];

// const shirtsAndBlouses = [
// 	{
// 		type: 'shirt',
// 		subType: 'dressShirt',
// 		style: ['modern'],
// 		fabric: 'cotton',
// 		fit: 'slim fit',
// 		sleeveLength: 'long sleeve',
// 		neckline: 'button-down collar',
// 		pattern: 'solid',
// 		// ...other details
// 	},
// 	{
// 		type: 'blouse',
// 		subType: 'wrap',
// 		style: ['boho'],
// 		fabric: 'silk',
// 		fit: 'relaxed fit',
// 		sleeveLength: '3/4 sleeve',
// 		neckline: 'v-neck',
// 		pattern: 'floral',
// 		// ...other details
// 	},
// 	// ... more items
// ];

// const sweatersAndCardigans = [
// 	{
// 		type: 'sweater',
// 		subType: 'crewneck',
// 		style: ['classic', 'cableKnit'],
// 		fabric: 'wool',
// 		knit: 'cableKnit',
// 		sleeveLength: 'long sleeve',
// 		fit: 'regular fit',
// 		// ...other details (color, price, images, etc.)
// 	},
// 	{
// 		type: 'cardigan',
// 		subType: 'buttonFront',
// 		style: ['oversized'],
// 		fabric: 'acrylic',
// 		knit: 'ribbed',
// 		sleeveLength: 'long sleeve',
// 		fit: 'oversized fit',
// 		// ...other details (color, price, images, etc.)
// 	},
// 	// ... more items
// ];

// const sweatshirts = [
// 	{
// 		type: 'hoodie',
// 		subType: 'zipUp',
// 		style: ['graphic', 'vintage'],
// 		fabric: 'fleece',
// 		weight: 'midweight',
// 		fit: 'regular fit',
// 		details: ['drawstrings', 'kangaroo pocket'],
// 		// ...other details (color, price, images, etc.)
// 	},
// 	{
// 		type: 'sweatshirt',
// 		subType: 'crewneck',
// 		style: ['solid', 'oversized'],
// 		fabric: 'cotton',
// 		weight: 'heavyweight',
// 		fit: 'oversized fit',
// 		details: ['ribbed cuffs'],
// 		// ...other details (color, price, images, etc.)
// 	},
// 	// ... more items
// ];

// const womensPants = [
// 	{
// 		type: 'jeans',
// 		subType: 'skinny',
// 		style: ['highWaisted', 'distressed'],
// 		fabric: 'denim',
// 		fit: 'skinny fit',
// 		rise: 'high-rise',
// 		length: 'full length',
// 		details: ['pockets'],
// 		// ...other details (color, price, images, etc.)
// 	},
// 	{
// 		type: 'pants',
// 		subType: 'dressPants',
// 		style: ['paperbagWaist'],
// 		fabric: 'linen',
// 		fit: 'wide leg',
// 		rise: 'high-rise',
// 		length: 'ankle length',
// 		details: ['pleated'],
// 		// ...other details (color, price, images, etc.)
// 	},
// 	// ... more items
// ];

// TOPS: BODYSUITS, CROPTOPS
// category: STRING, //'women'
// type: STRING, //'bodysuits, cropTops, halterTops'
// subType: STRING, //['sleeveless', 'long sleeves', 'cutOut']

// DRESSES
// category: STRING, //'women'
// type: STRING, //'dresses'
// subType: STRING, //mini/midi/maxi/jumpsuit/shirt dresses/prints

// T-SHIRTS
// category: STRING, //'women'
// type: STRING, //'t-shirts'
// subType: STRING, //short sleeve, long sleeve, basics, printed graphics, tank-tops, overavailableSizes
// style: [],
// collarType: [], // round-neck, v-neck, crew-neck

// SHIRTS & BLOUSES
// category: STRING, //'women'
// type: STRING, //'shirt || blouse'
// subType: STRING, // [strips, printed, satin, dressshirt]

// sweaters & cardigans
// category: STRING, //'women'
// type: STRING, //'sweater || cardigan'
// subType: STRING, //[buttonfront, round-neck, v-neck, open-front, turtle-nect]

// sweatshirts
// category: STRING, //'women'
// type: STRING, //'sweatshirt
// subType: STRING, // hoodie, shortsleave, long sleave, zipup, overavailableSizesd, printed cropped

// pants
// category: STRING, //'women'
// type: STRING, //'pants
// subType: STRING, // formal, wideleg, joggers, basic, high-waisted
