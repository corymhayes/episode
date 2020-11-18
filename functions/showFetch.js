exports.handler = async function(event, context) {
  console.log(event.queryStringParameters)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "helo" })
  }
}