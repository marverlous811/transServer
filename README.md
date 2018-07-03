# transServer

One Paragraph of project description goes here

### Prerequisites
```
nodejs >= 8.0
```
```
npm >= 5.6.0
```

### Installing

```
npm install
```

## Running the tests

```
npm start
```

Post to API: path/api/GPSData

post data: 
```
{
	userId: ,
	positionX: ,
	positionY: ,
}
```

response: data postion of all people posted in this server

NOTE: data is save by local => restart server will delete all data.