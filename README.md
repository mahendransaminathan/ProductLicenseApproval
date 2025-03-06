# ProductLicenseApproval

# UI/UX Design
https://www.figma.com/design/F4PhIa5Hek18jxaizdPkX6/ProductLicenseApproval?node-id=0-1&p=f&t=qVgDibYcwMIIVYnV-0

# Confluence page
https://rameshbabupeddapalli.atlassian.net/wiki/spaces/ProductLic/overview

# Jira board
https://rameshbabupeddapalli.atlassian.net/jira/software/projects/PLA/boards/2

# Web Service 
dotnet new webapi -o MyWebApiProject

# Build, publish and deploy - Back End Service  
Create an Azure Subscription from portal.azure.com (if not created already)  
Follow the below steps to create Azure App Service for backend  
• Search for "App Services" and select "App Services" from Services section  
• Select Create menu option under App Services  
• Select Web App option from the drop down menu  
• Create Web App Page will be displayed  
• Select one of the subscription from available subscriptions  
• Create a new resource group by selecting "Create new" option  
• Provide a resource group name example "PLA" and click on Ok button  
• Enter Web App Name example PLAService  
• Select code Radio button for Publish option  
• Select Runtime stack as .Net 9 (STS)  
• Select Operating System as Windows  
• Select near by region for Region example "East US 2"  
• Under Pricing Plans leave default value for Windows Plan  
• Select Free F1 for pricing plan  
• Select Disabled option for Zone Redundancy  
• Click on Review + create button
• Click on Create button from "Review + create" tab  

# Front End Service  
• Repeat same steps as backend service as mentioned above to create App Service for Front End application except the following 2 changes     
• Enter Web App Name example ProductLicenseApproval    
• Select Runtime stack as Node 20 LTS Go to App Services section    
• Select ProductLicenseApproval service Copy the default domain name example plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net    
• Open PLAService project from Visual Studio Code and update the WithOrigins method with https://plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net under program.cs file (make sure https:// is included before the url)  

• Go to App Services section  
• Select PLAService   
• Copy the default domain name example plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net   
• Open ProductLicenseApproval project from Visual Studio Code and update the fetch method with https://plaservice-hudjedare6g9b9hh.eastus2-01.azurewebsites.net/api/person under program.cs file (make sure https:// is included before the url and /api/person after the url)  

• Follow below steps to create the service principle  
• Get the subscription ID from Subscriptions service under Azure   
• Get the ProductLicenseApproval App service name from App Services under Azure   
• Go to Azure home and click on cloud shell (which is located at top right corner),   
• select powershell then select the subscription and click on Apply  
• Run the following command from Azure Shell by replacing <YOUR_WEBAPP_NAME> with ProductLicenseApproval App service name and YOUR_SUBSCRIPTION_ID with Azure subscription ID.  
• az ad sp create-for-rbac --name "<YOUR_WEBAPP_NAME>" --role contributor --scopes /subscriptions/<YOUR_SUBSCRIPTION_ID> --sdk-auth  
• Copy the Json from output.  

• Go to Settings under Front end Github repository   
• Scroll down to select Secrets and Variables under Security section on the left side of the screen   
• Select on Actions option and click on New Repository secret button.   
• Provide a name to this secret example Azure_Credentials and paste the service principle from previous step   
• Click on Add Secret button  

• Go to Actions tab  
• Click on New Workflow button from left hand side of the screen  
• Click on "set up a workflow yourself" link under "Choose a workflow"  
• Copy the code from the following link https://github.com/mahendransaminathan/ProductLicenseApproval/blob/main/.github/workflows/main.yml and paste it under Edit window  
• Provide a unique yml name to this GitHub action (See a textbox which is next to ./.GitHub/workflows/)  
• Click on Commit Changes... button from Right hand side of the screen  
• As soon as the code is committed, the build will start automatically and the application will be deployed to Azure service  
• Under All Workflows section, the green tick will be displayed as soon as the build is completed and the application is deployed  

• Go to Azure Portal and select the PLAService app service  
• Go to Settings section from left side of the screen and select Configuration section  
• Under Default settings section, select "on" option for the following two fields   
• Under Platform settings, Select on option for SCM Basic Auth Publishing credentials   
• Select on option for FTP Basic Auth Publishing credentials  
• click on save button to save the changes
• Click on Download publish profile option to download the publish profile  
• Open the downloaded the publish profile and copy the content to notepad  

• Go to Settings under Back end Github repository   
• Scroll down to select Secrets and Variables under Security section on the left side of the screen   
• Select on Actions option and click on New Repository secret button.   
• Provide a name to this secret example Azure_Publish_Profile and paste the service principle from notepad   
• Click on Add Secret button  

• Go to Back end Github repository  
• Go to Actions tab  
• Click on New Workflow button from left hand side of the screen  
• Click on "set up a workflow yourself" link under "Choose a workflow"  
• Copy the code from the following link (https://github.com/mahendransaminathan/PLAService/blob/main/.github/workflows/main.yml) and paste it under Edit window  
• Click on Commit Changes... button from Right hand side of the screen  
• As soon as the code is committed, the build will start automatically and the application will be deployed to Azure service  
• Under All Workflows section, the green tick will be displayed as soon as the build is completed and the application is deployed  

• Go to Azure Portal  
• Search for "SQL" and select "SQL Servers" option under services section  
• Click on Create option  
• Select one of the subscription from available subscriptions  
• Select the Resource group same as the resource group selected for two App services  
• Provide a server name under Server details section example plasqlserver  
• Select near by location for Location example "East US 2"  
• Under Authentication section, select "use SQL Authentication" for Authentication method  
• Provide username for Server admin login example administrator  
• Provide the Password   
• Provide the confirm password same as the password  
• Click on Review + create button  
• Click on Create button from "Review + create" tab  

• Search for "SQL" and Select SQL Databases option under services  
• Click on Create option  
• Select one of the subscription from available subscriptions  
• Select the Resource group same as the resource group selected for two App services  
• Provide the Database name under Database Details section example Person  
• Select the Server Name as previously created example plasqlserver  
• Select "configure database" under "compute + storage" section and set "Max vCores" to 1 and click on Apply  
• Click on Review + create button  
• Click on Create button from "Review + create" tab  

• Click on "Go to resource" button  
• Click on "Show database connection strings" under "Connection strings"  
• Copy the connection string from section "ADO.NET (SQL authentication)"  
• Open backend code in Visual Studio Code  
• Update the appsettings.json with the connection string and update the password  
• Create the Database using the following two commands  
	dotnet ef migrations add InitialCreate  
	dotnet ef database update  

• Goto SQL server  
• Select Security section from left hand side of the screen  
• Select Networking section under security section  
• From Selected networks on the right hand side of the screen  
• Click on Add your client  
• Select Allow Azure tick box   
• Click on Save button to save the changes     
