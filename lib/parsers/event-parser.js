module.exports = function(data) {
    var eventType = data.event.toLowerCase(),
        eventKey = data.eventKey,
        myContent;
    switch (eventType) {
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

    return eventKey;
}
