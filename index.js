import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';

let app = express();

let data = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/GPSData', (req, res) => {
	let userId = req.body.userId;
	let posX = req.body.positionX;
	let posY = req.body.positionY;

	if(!userId){
		res.send("userId is requirement");
		res.status(404);
	}

	data[userId] = {'positionX': posX, 'positionY': posY};

	res.send(data);
	res.status(200);
})

let server = app.listen(3000,() =>{
	console.log("Server is listening in port 3000");
})