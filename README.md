#Build, publish and deploy
Create an Azure Subscription from portal.azure.com (if not created already)
Follow the below steps to create Azure App Service for backend
Search for "App Services" and select "App Services" from Services section
Select Create menu option under App Services
Select Web App option from the drop down menu
Create Web App Page will be displayed
Select one of the subscription from available subscriptions
Create a new resource group by selecting "Create new" option
Provide a resource group name example "PLA" and click on Ok button
Enter Web App Name example PLAService
Select code Radio button for Publish option
Select Runtime stack as .Net 9 (STS)
Select Operating System as Windows
Select near by region for Region example "East US 2"
Under Pricing Plans leave default value for Windows Plan
Select Free F1 for pricing plan
Select Disabled option for Zone Redundancy
Click on Review + create button
Click on Create button from "Review + create" tab
Repeat same steps as backend service as mentioned above to create App Service for Front End application except the following 2 changes 
- Enter Web App Name example ProductLicenseApproval
- Select Runtime stack as Node 20 LTS Go to App Services section
- Select ProductLicenseApproval service Copy the default domain name example plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net
-  Open PLAService project from Visual Studio Code and update the WithOrigins method with https://plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net under program.cs file (make sure https:// is included before the url)

Go to App Services section
Select PLAService 
Copy the default domain name example plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net 
Open ProductLicenseApproval project from Visual Studio Code and update the fetch method with https://plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net/api/person under program.cs file (make sure https:// is included before the url and /api/person after the url)

Follow below steps to create the service principle
Get the subscription ID from Subscriptions service under Azure 
Get the ProductLicenseApproval App service name from App Services under Azure 
Go to Azure home and click on cloud shell (which is located at top right corner), 
select powershell then select the subscription and click on Apply
Run the following command from Azure Shell by replacing <YOUR_WEBAPP_NAME> with ProductLicenseApproval App service name and YOUR_SUBSCRIPTION_ID with Azure subscription ID.
az ad sp create-for-rbac --name "<YOUR_WEBAPP_NAME>" --role contributor --scopes /subscriptions/<YOUR_SUBSCRIPTION_ID> --sdk-auth
Copy the Json from output.

Go to Settings under Front end Github repository 
Scroll down to select Secrets and Variables under Security section on the left side of the screen 
Select on Actions option and click on New Repository secret button. 
Provide a name to this secret example Azure_Credentials and paste the service principle from previous step 
Click on Add Secret button

Go to Git Hub Actions from the Front End code Repository and create yml file for the build Have your Subscription ID and Front End Web App service name from your Azure Cloud Subscription to create the service principle. Run the following command to create Azure Credentials from Azure Shell. Replace <YOUR_WEBAPP_NAME> with your Azure Web App front end service name and replace YOUR_SUBSCRIPTION_ID with your Azure subscription ID from the following command. az ad sp create-for-rbac --name "<YOUR_WEBAPP_NAME>" --role contributor --scopes /subscriptions/<YOUR_SUBSCRIPTION_ID> --sdk-auth. Copy the output.

Write a code for build, publish and Deploy to Azure Web App Service and commit the code As soon as you commit the code, the build will start automatically and the build will be deployed to Azure service Go to Azure Web App service, Select Settings and Default document and bring the Index.html file to the top Create the Azure SQL Server and SQL Database. Get the connection string from the SQL DB and update the appsettings.json in the Back end with the connection string. Create the Database using the following two commands dotnet ef migrations add InitialCreate dotnet ef database update
