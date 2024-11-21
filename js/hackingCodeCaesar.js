// const jsonData = require('russian-words.json')


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



async function getRussianWords() {
	const data = await fetch('../russian-words.json')
	return data
}


function calculateScore(text) {
  const letterFrequencies = {
		"а": 7.64,
		"б": 2.01,
		"в": 4.38,
		"г": 1.72,
		"д": 3.09,
		"е": 8.75,
		"ё": 0.20,
		"ж": 1.01,
		"з": 1.48,
		"и": 7.09,
		"й": 1.21,
		"к": 3.30,
		"л": 4.96,
		"м": 3.17,
		"н": 6.78,
		"о": 11.18,
		"п": 2.47,
		"р": 4.23,
		"с": 4.97,
		"т": 6.09,
		"у": 2.22,
		"л": 0.21,
		"а": 0.95,
		"ц": 0.39,
		"ч": 1.40,
		"ш": 0.72,
		"щ": 0.30,
		"ъ": 0.02,
		"ы": 2.36,
		"ь": 1.84,
		"э": 0.36,
		"ю": 0.47,
		"я": 1.96
	}

  let score = 0;

  for (let char of text.toLowerCase()) {
    if (letterFrequencies[char]) {
      score += letterFrequencies[char];
    }
  }

  return score;
}

async function hackingCodeCaesar(str) {
	const data = await getRussianWords()
	console.log(data)
	const results = []
  let bestResult = "";
  let highestScore = 0;

  for (let key = 1; key <= russian_alphabet.length; key++) {
    let decrypted = decodeCaesar(str, key);
    results.push(`Смещение ${key}: ${decrypted}`);

    // Оценка осмысленности текста
    const score = calculateScore(decrypted);
    if (score > highestScore) {
      highestScore = score;
      bestResult = decrypted;
    }
  }

	return {
		results: results,
		bestResult: bestResult
	}
}

let {results, bestResult} = hackingCodeCaesar('Втюъ Аосйъи,.')
results.forEach(result => console.log(result))
console.log(bestResult)
