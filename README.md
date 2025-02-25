1. Create an Azure Subscription in Azure Cloud
2. Create a Azure Web App service for both Back end
3. Search for Azure Web App Service in Azure cloud and select Azure Web App service
4. https://portal.azure.com/#create/Microsoft.WebSite
5. Select Create menu option under App Services
6. Select Web App option from the drop down menu.
7. Create Web App Page will be displayed.
8. Select Subscription and Resource group. Please create a Resource Group if you dont have one.
9. Enter Web App Name
10. Select code Radio button for Publish option
11. Select .Net 9 run time stack for Back end.
12. Select Windows for Operating System
13. Select your near by Region for Region option
14. Under Pricing Plans, Select Free plan
15. Select Disabled option for Zone Redundancy
16. Select Review + Create option to create the service
17. Create a Azure Web App service for Front End.    
18. Search for Azure Web App Service in Azure cloud and select Azure Web App service
19. Select Create menu option under App Services
20. Select Web App option from the drop down menu.
21. Create Web App Page will be displayed.
22. Select Subscription and Resource group. Please create a Resource Group if you dont have one.
23. Enter Web App Name
24. Select code Radio button for Publish option
25. Select Node JS 20 runtime stack for Front end
26. Select Windows for Operating System
27. Select your near by Region for Region option
28. Under Pricing Plans, Select Free plan
29. Select Disabled option for Zone Redundancy
30. Select Review + Create option to create the service
31. Once the Azure Web App Front End service is created, get the link and add into the Program.cs file in the Back End code.
32. Once the Azure Web App Back End service is created, get the link and update the Fetch method within the App.js file to call the Post method 
33. Go to Git Hub Actions from the Front End code Repository and create yml file for the build
34. Have your Subscription ID and Front End Web App service name from your Azure Cloud Subscription to create the service principle.
35. Run the following command to create Azure Credentials from Azure Shell. Replace <YOUR_WEBAPP_NAME> with your Azure Web App front end service name and replace YOUR_SUBSCRIPTION_ID with your Azure subscription ID from the following command. 
36. az ad sp create-for-rbac --name "<YOUR_WEBAPP_NAME>" --role contributor --scopes /subscriptions/<YOUR_SUBSCRIPTION_ID> --sdk-auth. Copy the output.
37. Go to Settings under Front end Github repository
38. Scroll down to select Secrets and Variables under Security section on the left side of the screen
39. Select on Actions option and click on New Repository secret button. Enter the name for the secret and the copy the output from step 36 under Secret section
40. Click on Add Secret option. 
41. Write a code for build, publish and Deploy to Azure Web App Service and commit the code
42. As soon as you commit the code, the build will start automatically and the build will be deployed to Azure service
43. Go to Azure Web App service, Select Settings and Default document and bring the Index.html file to the top
44. Create the Azure SQL Server and SQL Database. Get the connection string from the SQL DB and update the appsettings.json with the connection string.
45. Create the Database using the following two commands
1. dotnet ef migrations add InitialCreate
2. dotnet ef database update

# SpecFlow Test


