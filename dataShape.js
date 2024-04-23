const RESULTS = [
	//Search Optimization: Think about the fields users might search for (e.g., brand, features, occasion) and ensure the object is designed to support those searches.
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
		//=====================================================
		reviews: {
			women: {
				clothes: [
					{
						id: Number, //1
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
				bags: [
					{
						id: Number, //1
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
				shoes: [
					{
						id: Number, //1
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
				accessories: [
					{
						id: Number, //1
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
			},
			men: {
				clothes: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						date: Number,
						rating: Number, //5
						reviewer: String, //'John Doe',
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
					},
				],
				bags: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						date: Number,
						rating: Number, //5
						reviewer: String, //'John Doe',
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
					},
				],
				shoes: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						date: Number,
						rating: Number, //5
						reviewer: String, //'John Doe',
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
					},
				],
				accessories: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						date: Number,
						rating: Number, //5
						reviewer: String, //'John Doe',
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
					},
				],
			},
			kids: {
				clothes: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
				bags: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
				shoes: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
				accessories: [
					{
						id: Number, //1,
						productId: Number, //SAME AS ID OF PRODUCT
						type: String, //jackets, coats, blazers, skirts <IS THIS NEEDED?>
						subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']<IS THIS NEEDED?>
						rating: Number, //5
						reviewText: String, //'Great jacket! Fits perfectly and looks stylish.',
						reviewer: String, //'John Doe',
						date: Number,
					},
				],
			},
		},
		//=====================================================
		// FIX THE SIZES. FOCUS ON COMMON SIZES AND REMOVE EDGE CASES TO REDUCE REDUNDANCY.
		// clothing sizes...
		// how will I plan on storing this? cant store such big objects? need to optimize and link section through a common product id....interface..when and how this data will be used..think of things in relationships. how to query based on product id and suchs..
		allSizes: {
			women: {
				bottoms: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
				tops: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
				shoes: [5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 11, 12],
			},
			men: {
				// connect this to the available sizes in your items.
				bottoms: ['36', '38', '40', '44', '46', 'S', 'M', 'L', 'XL'],
				tops: ['S', 'M', 'L', 'XL', 'XXL'],
				shoes: [
					'5',
					'6',
					'7',
					'8',
					'8.5',
					'9',
					'9.5',
					'10',
					'10.5',
					'11',
					'11.5',
					'12',
					'13',
					'14',
				],
				accessories: ['S', 'M', 'L', 'XL'],
				suits: ['36', '38', '40', '42', '44', '46', '48', '50', '52', '54'],
				blazers: [
					'44',
					'46',
					'48',
					'50',
					'52',
					'54',
					'56',
					'S',
					'M',
					'L',
					'XL',
				],
			},
			kids: {
				bottoms: [
					'13-14 years (65 inches)',
					'11-12 years (59 inches)',
					'10 years (55 inches)',
					'9 years (52 inches)',
				],
				tops: [
					'13-14 years (65 inches)',
					'11-12 years (59 inches)',
					'10 years (55 inches)',
					'9 years (52 inches)',
				],
				shoes: [
					'11 (7 inches)',
					'12 (7.2 inches)',
					'12.5 (7.4 inches)',
					'13.5 (7.7 inches)',
					'1 (8 inches)',
					'2 (8.2 inches)',
				],

				accessories: [
					'13-14 years (65 inches)',
					'11-12 years (59 inches)',
					'10 years (55 inches)',
					'9 years (52 inches)',
				],
			},
		},
		//=====================================================
		allColors: {
			// check for color redundancy
			women: {
				all: [
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
				SweaterShirtsVests: [
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
				bottoms: [
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
				outerWear: [
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
				tops: [
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
				shoes: [
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
					{
						color: 'metallic',
						hexColor: '#e5cf75',
					},
				],
				accessories: [
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
					{
						color: 'yellow',
						hexColor: '#FFAE42',
					},
					{
						color: 'orange',
						hexColor: '#FFA500',
					},
				],
				bags: [
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
						color: 'red',
						hexColor: '#FF0000',
					},
					{
						color: 'white',
						hexColor: '#FFF',
					},
				],
			},
			men: {
				outerWear: [
					//hoodies, sweaters
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
						color: 'pink',
						hexColor: '#FFC0CB',
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
				suits: [
					{
						color: 'black',
						hexColor: '#000',
					},
					{
						color: 'blue',
						hexColor: '#0000FF',
					},
					{
						color: 'gray',
						hexColor: '#808080',
					},
				],
				pants: [
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
						color: 'white',
						hexColor: '#FFF',
					},
				],
				shorts: [
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
						color: 'white',
						hexColor: '#FFF',
					},
				],
				shirts: [
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
				tShirts: [
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
				accessories: [
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
						color: 'white',
						hexColor: '#FFF',
					},
					{
						color: 'printed',
						hexColor: '#FFF',
					},
					{
						color: 'orange', //remove
						hexColor: '#FFA500',
					},
				],
				shoes: [
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
				],
				blazers: [
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
				],
				bags: [
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
				],
			},
			kids: {},
		},
		//=====================================================
		// If properties like type, style, material have specific options, create separate tables for those and reference them using IDs. This enhances data integrity and makes your database more scalable.
		clothing: {
			// FULL OBJECT.  limit default to 20 items?
			item: {
				keywords: [String], // searchable keywords.  ['jeans', 'skinny', 'dark wash', 'high-waisted', 'stretch denim'].  include matches against category, type, subtype, color, season, occasion, style, fit, pattern, fabric, PLUS additional words.
				id: Number, //this will be the same as the reviews.[category].productId.
				category: String, //'women, men, boys, girls'
				type: String, //jackets, coats, blazers, skirts, shoes, outerwear, jeans
				subType: String, //['basics','denim','biker', 'fauxLeather', 'coats', 'trenchCoats', 'cropped', 'suits']
				name: String,
				description: String,
				price: Number,
				// reviewIds: [Number], // [4, 5] IDs of reviews for this skirt NOT SURE IF I NEED THIS PROPERTY.  Product ID will connect to that specific review.
				primaryImage: String,
				secondaryImage: [String],
				size: String,
				color: [String], //'blue', {color: String, hexValue: String}
				season: String, // fall winter summer spring
				careInstructions: String, //'Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Cool iron if needed.',
				comingSoon: Boolean,
				occasion: String, // 'Suitable for casual wear, outdoor activities, and everyday use.',
				styleDetail: {
					style: [String], //["vintage", "boho", "preppy", "modern", 'classic', 'traditional', 'streetwear', 'grunge', 'casual', 'party', 'daily', 'romantic']
					feature: [String], //	'Adjustable drawstring hood, snap button cuffs, flap pockets, hidden zip closure.',
					fit: String, //loose fit, oversized fit, regular fit, Skinny Fit, Slim Fit, Straight Fit, Wide Leg, Bootcut fit, Flare fit, Relaxed Fit
					hasPattern: Boolean,
					pattern: String, //Solid, Striped, Plaid, Floral, polka dot
					sleeveLength: String, //(e.g., "short sleeve", "long sleeve"), sleeveless, 3/4 sleeve,
					neckLine: String, //(e.g., "crew neck", "v-neck")Button-down Collar, Spread Collar, Mandarin Collar, V-neck, Scoop Neck, round-next, high-neck
					rise: String, //"high-rise", "mid-rise", "low-rise")
					length: String, //length: (for pants/skirts – "ankle", "full length"), Full length, Cropped, Ankle length, Capri
					fabric: String, //'100% Polyester',Denim, Silk, Cotton, Linen, Polyester, Leather (or faux leather), Stretch blends, fleece, wool, cashmere, alpaca,
					closure: String, //'Front hidden zip and snap button closure.',
				},
				measurements: {
					chest: Number,
					waist: Number,
					hips: Number,
					inseam: Number,
				},
				brandInfo: {
					brand: String, //'Example Brand',
					countryOfOrigin: String, //'United States',
					about: String, // 'Example Brand is committed to creating high-quality, stylish apparel for modern individuals. Our designs combine functionality, comfort, and fashion-forward aesthetics to meet the needs of our customers.',
				},
				availability: {
					inStock: Boolean,
					quantity: Number,
				},
				availableOptions: {
					size: [String],
					color: [String], //'blue', {color: String, hexValue: String}
					primaryImage: String,
					secondaryImage: [String],
				},
			},
		},
		footwear: {
			item: {
				id: Number, //this will be the same as the reviews.[category].productId.
				category: String, //women, men, boys, girls
				type: String, //LOAFERS,PLATFORMS,PUMPS,SNEAKERS,HEELED SHOES,FISHERMAN SANDALS, WEDGES, SANDALS, CLOGS, BOOTS, ANKLE BOOTS, SPORT SHOES, BALLET FLATS,MULES
				name: String,
				description: String,
				price: Number,
				// reviewIds: [Number], //May not need
				primaryImage: String,
				secondaryImage: [String],
				size: String,
				color: [String], //'blue', {color: String, hexValue: String}
				season: String, // fall winter summer spring
				careInstructions: String, //'Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Cool iron if needed.',
				occasion: String, //'Suitable for casual wear, outdoor activities, and everyday use.',
				comingSoon: Boolean,
				styleDetail: {
					style: [String], //['casual', "daily", 'upscale', 'professional', "classic",]
					feature: [String], //'Water-resistant fabric, UV protection.',
					width: [String], //['Regular', 'Wide', 'Narrow'],
					closureType: [String], //['Laces', 'Buckle', 'Slip-on'],
					heelHeight: Number, //(inches or cm)
					soleHeight: Number,
					patern: String, // plain,
					heelType: String, // hem, block, wedge, platform, high, medium, flat
					externalMaterial: String, //faux leather, leather, suede, cotton, knit,
					liningMaterial: String, // textile, leather
					soleMaterial: String, //'Rubber', 'TPR', etc.
				},
				// If properties like type, style, material have specific options, create separate tables for those and reference them using IDs. This enhances data integrity and makes your database more scalable. DO I DO THIS FOR ALL OF THEM?
				brandInfo: {
					brand: String, //'Example Brand',
					countryOfOrigin: String, //'United States',
					about: String, // 'Example Brand is committed to creating high-quality, stylish apparel for modern individuals. Our designs combine functionality, comfort, and fashion-forward aesthetics to meet the needs of our customers.',
				},
				availability: {
					inStock: true,
					quantity: Number,
				},
				availableOptions: {
					size: [String],
					color: [String], //'blue', {color: String, hexValue: String}
					primaryImage: String,
					secondaryImage: [String],
				},
			},
		},
		bags: {
			item: {
				id: Number, //this will be the same as the reviews.[category].productId.
				category: String, //women, men, boys, girls
				type: String, // BUCKET BAG, SHOULDER BAG, PHONE BAG, CROSSBODY BAG, travel bags, backpack, wallets, bags, TOTE BAGS, BOWLING BAG, CLUTCH, HANDBAG, BRIEFCASE, mini bag
				name: String,
				description: String,
				// reviewIds: [Number], // [4, 5] IDs of reviews for this skirt NOT SURE IF I NEED THIS PROPERTY. May remove
				price: Number,
				primaryImage: String,
				secondaryImage: [String],
				size: String,
				color: [String], //'blue', {color: String, hexValue: String}
				occasion: String,
				season: Boolean,
				careInstructions: String,
				comingSoon: Boolean,
				styleDetail: {
					feature: [String], //'Water-resistant fabric, UV protection.',
					material: String, //Letther/.
					lining: String,
					handleType: [String], //   ['Detachable Shoulder Strap', 'Top Handles']
					weight: Number,
					pattern: String,
					closureType: String, // may not need
					interiorPockets: Number,
					exteriorPockes: Number,
					type: String, // 'Brass', 'Silver', etc.
				},
				bagSize: {
					height: Number,
					width: Number,
					depth: Number,
					capacity: Number,
				},
				brandInfo: {
					brand: String, //'Example Brand',
					countryOfOrigin: String, //'United States',
					about: String, // 'Example Brand is committed to creating high-quality, stylish apparel for modern individuals. Our designs combine functionality, comfort, and fashion-forward aesthetics to meet the needs of our customers.',
				},
				availability: {
					inStock: Boolean,
					quantity: Number,
				},
				availableOptions: {
					size: [String], //MAY NOT NEED
					color: [String], //'blue', {color: String, hexValue: String}
					primaryImage: String,
					secondaryImage: [String],
				},
			},
		},
		accessories: {
			item: {
				id: Number, //this will be the same as the reviews.[category].productId.
				category: String, //women, men, boys, girls
				type: String, // 'Jewelry', 'Hats', 'Scarves', 'Belts', 'Sunglasses', 'hair accessories'...
				subtype: String, // 'Necklace', 'Earrings', 'Bracelet', ...
				typeProperties: {
					jewelry: {
						gemstone: String,
						closureType: String,
						size: String,
						material: String, // 'Gold', 'Leather', 'Silk', ...
					},
					hats: {
						brimSize: Number, // may not use this..
						crownHeight: Number, // may not use this.
						size: Number, //not needed
						material: String, // 'Gold', 'Leather', 'Silk', ...
					},
					scarves: {
						shape: String,
						width: Number,
						height: Number,
						material: String, // 'Gold', 'Leather', 'Silk', ...
					},
					belts: {
						buckleType: String, //('Pin Buckle', 'Frame Buckle', 'Plate Buckle', 'Snap', etc.)
						width: Number, //(in inches or centimeters)
						strapMaterial: String, //('Leather', 'Canvas', 'Synthetic', 'Braided', etc.)
					},
					sunglasses: {
						frameShape: String, //('Round', 'Square', 'Aviator', 'Cat-Eye', 'Wayfarer', etc.)
						frameMaterial: String, //('Metal', 'Plastic', 'Acetate', 'Wood', etc.)
						lensColor: String, //('Brown', 'Grey', 'Gradient', 'Mirrored', etc.)
						lensType: String, //('Polarized', 'UV400', 'Photochromic', etc.)
					},
					wallets: {
						length: Number,
						width: Number,
						height: Number,
						diameter: Number,
						material: String, // 'Gold', 'Leather', 'Silk', ...
					},
				},
				name: String,
				description: String,
				price: Number,
				primaryImage: String,
				secondaryImage: [String],
				size: String,
				color: [String], //'blue', {color: String, hexValue: String}
				pattern: String, // 'Solid', 'Striped', 'Floral', ...
				season: String, // 'Summer', 'Winter', 'All-Season'
				gender: String, // 'Women', 'Men', 'Unisex'
				careInstructions: String, //'Machine wash cold, gentle cycle. Do not bleach. Tumble dry low. Cool iron if needed.',
				occasion: String, //'Suitable for casual wear, outdoor activities, and everyday use.','Everyday', 'Formal', ...
				comingSoon: Boolean,
				feature: [String], //'Water-resistant fabric, UV protection.','Hypoallergenic', 'Water-Resistant', ...
				// reviewIds: [Number], // [4, 5] IDs of reviews for this skirt NOT SURE IF I NEED THIS PROPERTY. May remove
				brandInfo: {
					brand: String, //'Example Brand',
					countryOfOrigin: String, //'United States',
					about: String, // 'Example Brand is committed to creating high-quality, stylish apparel for modern individuals. Our designs combine functionality, comfort, and fashion-forward aesthetics to meet the needs of our customers.',
				},
				availability: {
					inStock: Boolean,
					quantity: Number,
				},
				availableOptions: {
					size: [String], //MAY NOT NEED
					color: [String], //'blue', {color: String, hexValue: String}
					material: [String],
					primaryImage: String,
					secondaryImage: [String],
				},
			},
		},
	},
];
//
// TODO:
// 1. create essential objects for all.
// CLOTHING, SHOES, BAGS, ACCESSORIES(MAY NEED MORE INFO)
// id: Number,
// category: String,
// type: String,
// subType: String,
// name: String,
// description: String,
// price: Number,
// primaryImage: String,
// secondaryImage: [String],
// size: String,
// color: [String],
// 	availableOptions: { MAY NOT NEED THIS.
// 	size: [String],
// 	color: [String], //'blue', {color: String, hexValue: String}
// 	primaryImage: String,
// 	secondaryImage: [String],
// },

// 2.  Think about the endpoints; all, essentials, id. reviews, colors, sizes last
// 3.  normalize everything. what are the relationships?
// connect everything through product ID: reviews, full objects, essential objects.
