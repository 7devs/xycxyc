var wechat = require('../wechat.js');

module.exports = function(data) {
    var event = data.event.toLowerCase(),
        eventKey = data.eventKey,
        myContent;
    switch (event) {
      case 'click':
        switch (eventKey) {
          case 'menu11':
              myContent = JSON.stringify(data);
            break;
          case 'menu22':

            break;
          default:
            break;
        }

        break;
      default:

        break;
    }

    return myContent;
}
