var wechat = require('../wechat');

module.exports = function(data) {
    var eventType = data.event.toLowerCase(),
        eventKey = data.eventkey,
        myContent;
    switch (eventType) {
      case 'click':
        switch (eventKey) {
          case 'menu11':
              myContent = JSON.stringify(data);
            break;
          case 'menu22':
              wechat.sendByTemplate(
                data.fromusername,
                'gwc2PuZ2vTENBLWkYXlsFzi3I8gz-auCXgLvXSI-oAs',
                {
                   "first": {
                       "value":"test-test",
                       "color":"#173177"
                   },
                   "keyword1":{
                       "value":"巧克力",
                       "color":"#173177"
                   },
                   "keyword2": {
                       "value":"39.8元",
                       "color":"#173177"
                   },
                   "keyword3": {
                       "value":"2014年9月22日",
                       "color":"#173177"
                   },
                   "remark":{
                       "value":"欢迎再次购买！",
                       "color":"#173177"
                   }
                 }
              );
              myContent = JSON.stringify(data);
            break;
          default:
            break;
        }

        break;
      default:

        break;
    }

    return eventKey;
}
