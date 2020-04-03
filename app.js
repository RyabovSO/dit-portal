const express = require('express');
const fourMeToJiraRouter = require('./routes/4me-jira');
const fourMeToHpsmRouter = require('./routes/4me-hpsm');
const faviconRouter = require('./routes/favicon');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

app.use('/me-jira', fourMeToJiraRouter);
app.use('/me-hpsm', fourMeToHpsmRouter);
app.use('/favicon.ico', faviconRouter);