const express = require('express')
const {scrapeFlights} = require('./scraper')

const app = express()
const port = 3000


app.get('/',(req, res) => {
  res.send('Hello worlld')
})

app.get('/search', async (req, res) => {
	const { from ,to, departDate, returnDate } = req.query;
  console.log(req.query)
	const response = await scrapeFlights(from ,to, departDate, returnDate);
  console.log(response)

	res.send(response);
})


app.listen(port, ()=>{
  console.log(`Flight Prices backend API listening on port ${port}`)
} )