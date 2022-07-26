MERN app Vending Maching Prototype

Clone the repo via 
$git clone https://github.com/cmfunk/vending.git

Go into the Server directory and install nodemon
$cd server
$npm i nodemon

Start the server
$npm start



Go into the Client directory and install dependcies
$cd client
$npm install --force

Start the Client
$npm start



Able to modify the Cost and CurrentInv of items if you click the 'More Items' hamburger icon in top right corner of the items. Move to the Admin Tab on the form to the right and able to modify Cost and CurrentInv assuming the passcode is correct.
CurrentInv will check on the MaxInv and will not restock any higher. i.e. 100 maxInv for Pop so currentInv ceiling is 100.

Able to add dollar and 50c to the current amount and ability to select a soda if you have enough money. Will download a JSON file of the soda details and subtract the cost from the current amount.