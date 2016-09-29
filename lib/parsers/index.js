module.exports = function(data) {
    var myContent;
    switch (data.msgtype) {
      case 'text':
          myContent = require('./text-parser.js')(data.content);
        break;
      case 'voice':
          myContent = JSON.stringify(data);
        break;
      case 'image':
          myContent = JSON.stringify(data);
        break;
      case 'video':
          myContent = JSON.stringify(data);
        break;
      case 'location':
          myContent = JSON.stringify(data);
        break;
      case 'shortvideo':
          myContent = JSON.stringify(data);
        break;
      case 'link':
          myContent = JSON.stringify(data);
        break;
      case 'event':
          myContent = require('./event-parser.js')(data);
        break;
      default:
          myContent = 'I have no idea.'
        break;
    }

    return myContent;

}
