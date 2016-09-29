var app = require('express')(),
    bodyParser = require('body-parser'),
    wechat = require('./lib/wechat.js'),
    conf = require('./lib/config.js');

app.use(bodyParser.urlencoded({
    extended : false
}));

wechat(conf.wechat);

wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8011, function(err) {
    console.log('listen at 8011...');
});
