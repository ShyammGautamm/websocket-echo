# websocket-echo
Step 1. Go to api gateway and give name and role (request.body.action)
Step 2. Add a  route
Step 3. Go to lambda function and copy ARN and past in Intergartion for the default route(APIGateway)

To test run: wscat -c wss://et7pejg7q4.execute-api.us-east-1.amazonaws.com/production
and then type any message
