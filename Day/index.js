import express from 'express';

const app = express();

const port = 3000;

const d = new Date();
const day = d.getDay();

app.set('view engine', 'ejs');
var advice;
var dayType;
if (day == 6 || day == 0) {
    dayType = 'a weekend';
    advice = "Happy weekend!";
} else {
    dayType = 'a weekday';
    advice = "go to work!";
}

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', {
        dayType: dayType,
        advice: advice
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
