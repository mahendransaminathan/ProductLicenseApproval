# Build, publish and deploy - Back End Service  
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
#Front End Service
Repeat same steps as backend service as mentioned above to create App Service for Front End application except the following 2 changes     
Enter Web App Name example ProductLicenseApproval    
Select Runtime stack as Node 20 LTS Go to App Services section    
Select ProductLicenseApproval service Copy the default domain name example plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net    
Open PLAService project from Visual Studio Code and update the WithOrigins method with https://plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net under program.cs file (make sure https:// is included before the url)  

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

Go to Actions tab   
Click on New Workflow button from left hand side of the screen    
Click on set up a workflow yourself link under Choose a workflow    
Copy the code from the following link https://github.com/mahendransaminathan/ProductLicenseApproval/blob/main/.github/workflows/main.yml and paste it under Edit window    
Click on Commit Changes... button from Right hand side of the screen  
As soon as the code is committed, the build will start automatically and the application will be deployed to Azure service  
Under All Workflows section, the green tick will be displayed as soon as the build is completed and the application is deployed  

Go to Back end Github repository   
Go to Actions tab   
Click on New Workflow button from left hand side of the screen    
Click on set up a workflow yourself link under Choose a workflow    
Copy the code from the following link (https://github.com/mahendransaminathan/PLAService/blob/main/.github/workflows/main.yml) and paste it under Edit window    
Click on Commit Changes... button from Right hand side of the screen  
As soon as the code is committed, the build will start automatically and the application will be deployed to Azure service  
Under All Workflows section, the green tick will be displayed as soon as the build is completed and the application is deployed  

# Sql Server  
Go to Azure Portal  
Search for "SQL Server" and Select SQL Server option under services  
Click on Create option  
Select one of the subscription from available subscriptions  
Select the Resource group same as the resource group selected for two App services  
Provide a server name under Server Details section  
Select near by location for Location example "East US 2"  
Under Authentication section, select "use SQL Authentication" for Authentication method    
Provide the Server admin login for Server admin login  
Provide the Password  
Provide the confirm password same as the password  
Click on Review + create button  
Click on Create button from "Review + create" tab  

# SQL Database  
Search for "SQL Database" and Select SQL Databases option under services  
Click on Create option  
Select one of the subscription from available subscriptions   
Select the Resource group same as the resource group selected for two App services  
Provide the Database name under Database Details section  
Select the Server Name as previously created  
Select configure database under compute + storage section and select minimum storage  
Click on Review + create button  
Click on Create button from "Review + create" tab  

Get the connection string from the SQL DB and update the appsettings.json in the Back end code with the connection string    
Open the Back end code in Visual studio code and Create the Database using the following two commands  
dotnet ef migrations add InitialCreate  
dotnet ef database update  

Select Settings and Default document and bring the Index.html file to the top  
