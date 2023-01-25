'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.s3hook = (event, context) => {
    console.log(`event: ${JSON.stringify(event)}`);
    // console.log(JSON.stringify(context));
    // console.log(JSON.stringify(process.env));
};
