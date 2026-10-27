This repo contains an iviva v5 uxp project for uploading utility bills (Water and energy).
There must be a UI to upload the bills.
A place to see uploaded bills and the status ('Pending', 'Processing', 'Done', 'Error').
An action to download the bill that was uploaded.
A way to see all the extracted parameters from the bill.

The UI must start with an object search page.
It should show all past uploaded items.
There should be a button to upload a new item which will simply present a dialog to upload.
We should upload the file in the background and use the url to call a lucy model/action with that url as a parameter.
The action should return an 'id' for that upload.
The object search will show all items.
There will be a lucy action call (with pagination) to get the list of items with extracted fields as properties of each item's object.
Clicking on an item should show the object details panel which shows the extracted fields and toolbar button to download the original document as well as an edit button to edit those extracted fields.

For the object search and object details panel follow what was done in the location app in ~/eutech/iviva.dx/Location/5.0

Look at the /Users/shivanan/eutech/iviva.dx/Location/5.0/Resources/views/src/views/portfolio/PortfolioView.tsx component for how ObjectSearch works.

Assume the lucy model will extract the parameters and store it.
There will be the following Lucy actions:
Upload (url as a parameter)
List (paginated list of results)
Details (takes id as a parameter and returns details of one item including the uploaded time, uploaded user key, path to the uploaded file and status along with any fields extracted)

