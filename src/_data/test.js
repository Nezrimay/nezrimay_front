// const axios = require('axios')

// module.exports = async function () {
// 	const response = await axios.get(
// 		'https://jsonplaceholder.typicode.com/users'
// 	)
// 	console.log(response)
// 	return response.data
// }

module.exports = function () {
	return [
		{
			id: 1,
			name: 'Название товара 1',
			price: 12000,
			category: 'Живопись',
			description:
				'По всей видимости статуэтка имела обе руки, которые были подняты вверх, как бы тянущимися к свету. Снизу на плоской части избранным богиней разрешено было написать своё имя на тайном языке, чтобы быть благословленными. На данном образце обнаружены частицы краски, так что полагается, она была цветной. Мы не можем сказать насколько был распространён её культ, но подобные статуэтки находили по всей протяженности крымского побережья.',
			tags: [
				{
					tagKey: 'Материал',
					tagValue: 'самозатвердевающая глина',
				},
				{
					tagKey: 'Размер',
					tagValue: '8,5x5',
				},
			],
			image: ['/images/products/card.png'],
		},
		{
			id: 2,
			name: 'Название товара 2',
			price: 12000,
			category: 'Живопись',
			description:
				'По всей видимости статуэтка имела обе руки, которые были подняты вверх, как бы тянущимися к свету. Снизу на плоской части избранным богиней разрешено было написать своё имя на тайном языке, чтобы быть благословленными. На данном образце обнаружены частицы краски, так что полагается, она была цветной. Мы не можем сказать насколько был распространён её культ, но подобные статуэтки находили по всей протяженности крымского побережья.',
			tags: [
				{
					tagKey: 'Материал',
					tagValue: 'самозатвердевающая глина',
				},
				{
					tagKey: 'Размер',
					tagValue: '8,5x5',
				},
			],
			image: ['/images/products/card.png'],
		},
		{
			id: 3,
			name: 'Название товара 3',
			price: 12000,
			category: 'Живопись',
			description:
				'По всей видимости статуэтка имела обе руки, которые были подняты вверх, как бы тянущимися к свету. Снизу на плоской части избранным богиней разрешено было написать своё имя на тайном языке, чтобы быть благословленными. На данном образце обнаружены частицы краски, так что полагается, она была цветной. Мы не можем сказать насколько был распространён её культ, но подобные статуэтки находили по всей протяженности крымского побережья.',
			tags: [
				{
					tagKey: 'Материал',
					tagValue: 'самозатвердевающая глина',
				},
				{
					tagKey: 'Размер',
					tagValue: '8,5x5',
				},
			],
			image: ['/images/products/card.png'],
		},
	]
}
