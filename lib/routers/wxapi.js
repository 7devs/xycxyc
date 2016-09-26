var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;
        var content = data.content;
        var myContent;
        switch (content) {
          case '1':
            myContent = '111';
            break;
          case '2':
            myContent = '222';
            break;
          case '3':
            myContent = '333';
            break;
          case '4':
            myContent = '444';
            break;
          case '5':
            myContent = '555';
            break;
          case '6':
            myContent = '666';
            break;
          case '7':
            myContent = '777';
            break;
          case '8':
            myContent = '888';
            break;
          case '9':
            myContent = '999';
            break;
          default:
            myContent = 'xxx';
        }

        res.append('Content-Type','text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {Content: {_cdata: '哈哈哈哈哈哈哈哈哈'}},
                {MsgType: {_cdata: myContent}}ls
            ]
        }));
    })
    .get(function(req, res, next) {
        var str = req.query.echostr;
        res.send(str);
    });

module.exports = router;
