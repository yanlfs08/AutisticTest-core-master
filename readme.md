# Install modules
>> npm i 

# Edit database configuration on 
>> src/config/db.js

# Create database 
>> npm run migrate-local

# Start server
>> npm run start

# Deploy command 
>> gcloud functions deploy autistictest-core --runtime nodejs8 --trigger-http --entry-point app