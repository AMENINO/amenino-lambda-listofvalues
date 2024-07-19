import { APIGatewayProxyEvent } from 'aws-lambda'

export function constructAPIGatewayEvent(
  message: any,
  options: Record<string, any> = {}
): APIGatewayProxyEvent {
  return {
    httpMethod: options.method || 'GET',
    path: options.path || '/',
    queryStringParameters: options.query || {},
    headers: options.headers || {},
    body: options.rawBody || JSON.stringify(message),
    multiValueHeaders: {},
    multiValueQueryStringParameters: options.multiquery || {},
    isBase64Encoded: false,
    pathParameters: options.pathParameters || {},
    stageVariables: options.stageVariables || {},
    requestContext: options.requestContext || {},
    resource: options.resource || ''
  }
}
