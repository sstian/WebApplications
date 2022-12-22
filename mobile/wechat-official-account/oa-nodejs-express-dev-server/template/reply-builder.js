
function replyMsgTypeText(userInputObject) {
  replyMsgType = "text";
  replyContent = "Welcome to join us!";
  return {
    condition: userInputObject.MsgType === "text",
    replyData: `
      <xml>
        <ToUserName><![CDATA[${userInputObject.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${userInputObject.ToUserName}]]></FromUserName>
        <CreateTime>${Date.now()}</CreateTime>
        <MsgType><![CDATA[${replyMsgType}]]></MsgType>
        <Content><![CDATA[${replyContent}]]></Content>
      </xml>
    `
  };
}

function replyMsgTypeImage(userInputObject) {
  replyMsgType = "text";
  replyContent = "Nice image!";
  return {
    condition: userInputObject.MsgType === "image",
    replyData: `
      <xml>
        <ToUserName><![CDATA[${userInputObject.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${userInputObject.ToUserName}]]></FromUserName>
        <CreateTime>${Date.now()}</CreateTime>
        <MsgType><![CDATA[${replyMsgType}]]></MsgType>
        <Content><![CDATA[${replyContent}]]></Content>
      </xml>
    `
  };
}

/**
 * Build reply templates.
 * @param {object} userInputObject 
 * @returns [ {condition: <true|false>, replyData: <xml>}, ...]
 */
function replyBuilder(userInputObject) {
  return [
    replyMsgTypeText(userInputObject),
    replyMsgTypeImage(userInputObject)
  ];
}


module.exports = replyBuilder;
