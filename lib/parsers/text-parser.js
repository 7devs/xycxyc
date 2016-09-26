module.exports = function(text) {
  var myContent;
  switch (text) {
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

  return myContent;
}
