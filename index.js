const AWS = require('aws-sdk')
const ENDPOINT = 'et7pejg7q4.execute-api.us-east-1.amazonaws.com/production/'
const client = new AWS.ApiGatewayManagementApi({ endpoint: ENDPOINT });

const sendMessagetoClient = async(id, body) => {
    try{
        await client.postToConnection({
            'ConnectionId': id,
            'Data': Buffer.from(JSON.stringify(body)),
        }).promise();
    }catch (err){
        console.log(err);
    }
};



exports.handler = async (event) => {
    // TODO implement
    
    if(event.requestContext){
        const connectionId = event.requestContext.connectionId;
        const routeKey = event.requestContext.routeKey;
        
        let body ={};
        
        try{
            if(event.body){
                body.JSON.parse(event.body);
            }
        }catch(err){
                
            }
        
        switch (routeKey) {
            case '$connect':
                // break;
            case '$disconnect':
                // break;
            case '$default':
                // break;
            
            default:
                await sendMessagetoClient(connectionId, {FromServer : event.body});
                // code
        }
        
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
