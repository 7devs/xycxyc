module.exports = function(data) {
    var myContent;
    console.log(JSON.stringify(data));
    switch (data.msgtype) {
      case 'text':
          myContent = require('./text-parser.js')(data.content);
        break;
      case 'voice':

        break;
      case 'image':

        break;
      case 'video':

        break;
      case 'location':

        break;
      case 'shortvideo':

        break;
      case 'link':

        break;
      default:
          myContent = 'I have no idea.'
        break;
    }

    return myContent;

}
