russian_alphabet = [
	'А',
	'Б',
	'В',
	'Г',
	'Д',
	'Е',
	'Ё',
	'Ж',
	'З',
	'И',
	'Й',
	'К',
	'Л',
	'М',
	'Н',
	'О',
	'П',
	'Р',
	'С',
	'Т',
	'У',
	'Ф',
	'Х',
	'Ц',
	'Ч',
	'Ш',
	'Щ',
	'Ъ',
	'Ы',
	'Ь',
	'Э',
	'Ю',
	'Я',
]

const key = 10

function codeCaesar(str, key) {
	let codeStr = ''

	for (let i = 0; i < str.length; i++) {
		const hasLetter = russian_alphabet.indexOf(str.charAt(i).toUpperCase())

		if (hasLetter === -1) codeStr += str.charAt(i)
		else {
			let codeLetterPosistion =
				(russian_alphabet.indexOf(str.charAt(i).toUpperCase()) + key) %
				russian_alphabet.length

			codeStr +=
				str.charAt(i) === str.charAt(i).toUpperCase()
					? russian_alphabet.at(codeLetterPosistion)
					: russian_alphabet.at(codeLetterPosistion).toLowerCase()
		}
	}

	return codeStr
}

console.log(codeCaesar('Шифр Цезаря,.', key))
