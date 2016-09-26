var router = require('express').Router(),
    xml = require('xml'),
    parsers = require('../parsers');
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;
        var myContent = parsers(data);

        res.append('Content-Type','text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {Content: {_cdata: myContent}},
                {MsgType: {_cdata: 'text'}}
            ]
        }));
    })
    .get(function(req, res, next) {
        var str = req.query.echostr;
        res.send(str);
    });

module.exports = router;
