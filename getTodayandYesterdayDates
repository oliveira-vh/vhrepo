const getToday = () => {
	const today = new Date()
	return (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
}

const getYesterday = () => {
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)
	return (yesterday.getMonth()+1)+'-'+yesterday.getDate()+'-'+yesterday.getFullYear()

}

today = getToday()

yesterday = getYesterday()

console.log(today)
console.log(yesterday)
