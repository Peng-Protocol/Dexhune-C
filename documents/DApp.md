# Dexhune DApp

## Premise
A frontend web application for interacting with Dexhune smart contracts. 

## Disambiguation
- "Symbol(Button)" ; button is visually a symbol 
- "Text(Button)" ; button is visually text
- Hyperlink ; button is a hyperlink
- Panel ; is a panel 
- Web3 ; button triggers a blockchain or wallet function
- Popup ; button triggers a popup panel
- Field ; is a field 
- PreWrap ; is a panel with text that updates under certain criteria 
- Toggle ; is a set of buttons where only (1) can be chosen at a time
- Scroll(panel) ; is a panel with a scroll wheel for accommodating long lines of data

## Buttons and panels

![Layout](https://files.catbox.moe/rb1mmw.png)

(Top left)

1a. Wallet connect status - panel - subheading 2 - show *User's wallet address* if connected 

1b. Github link - symbol(button) - hyperlink  

1c. Whitepaper link - symbol(button) - hyperlink

1d. Token contract address - symbol(button) - hyperlink

1e. Exchange contract address - symbol(button) - hyperlink

1f. DAO contract address - symbol(button) - hyperlink


(Top right)

2a. Connect wallet - symbol - web3 

2b. Price panel - panel - label 3 - Prewrap 4

2c. Query(Price Panel) - Text(button) Triggers "PreWrap 4"

2d. Help button (bottom) - symbol(button) - popup - Subheading 8


(Center)

3a. Welcome image -  image - image 1

3b. Welcome panel - panel - Subheading 1


(Maker Menu)

4a. Contract field - field - label 1

4b. Amount field - field - label 2

4c. Query(name panel) - Text(button) - triggers "PreWrap 1"  

4d. Buy - Text(button) - triggers 'Function Buy' [See "Buy / Sell"] [See E1 & E2]

4e. Sell - Text(button) - triggers 'Function Sell'

4f. Help button (top) - symbol(button) - popup - Subheading 3

4g. Help button (bottom) - symbol(button) - popup - Subheading 5

4h. clearOrder (user) - button - triggers "clear order"


![](https://files.catbox.moe/n29qhg.png)


(Taker Menu)

5a. Contract field - field - label 1

5b. Amount field - field - label 2

5c. Query(name panel) - Text(button) - triggers "PreWrap 1"  

5d. Take Buy - Text(toggle) - triggers "takeBuy" function

5e. Take Sell - Text(toggle) - triggers "takeSell" function

5h. Help button (top) - symbol(button) - popup - Subheading 6


(Orderbook) 

6a. Contract field - field - Label 1

6b. Pending orders - Scroll(panel) - PreWrap 3

6c. Query - Text(button) - triggers "PreWrap 3"

6d. Balances - Scroll(panel) - PreWrap 6

6e. Query - Text(button) - triggers "PreWrap 6"

6f. Clear orders - Text(button) - Triggers "function ; clear all orders"

6g. Help button (top) - symbol(button) - popup - Subheading 4


![](https://files.catbox.moe/nx45gx.png)


(Minting Interface)

7a. Remaining Pengs - panel - PreWrap 5

7b. Query (Remaining Pengs) - Symbol(button) - Triggers "PreWrap 5"

7c. Help button (top) - symbol(button) - popup - Subheading 7

7d. Mint number - field - label 8

7e. Mint Now - Symbol(button) - Web3 - triggers "Mint Peng" 

7f. Marketplace - image - button - image 2


(Listing Interface) 

8a. Contract field - field - Label 1

8b. Reward? - toggle - on/off - reveals 8c and 8d if "on"

8c. Reward amount - field - hidden if 8b is "off" - label 4

8d. Reward Threshold - field - hidden if 8b is "off" - label 5

8e. Parity - toggle - on/off - reveals 8f if "on", reveals 8g if "off"

8f. Parity address - field - hidden if 8e is "off" - label 6

8g. Listing Price - field - hidden if 8e is "on" - label 7

8h. List token - Text(button) - triggers "list token"

8i. All listings - Scroll(panel) - Prewrap 7 

8j. Query (All listings) - Text(button) - triggers "Prewrap 7"

8k. Help button (top) - Symbol(button) - popup - Subheading 8


(Self Reference) 

9a. Telegram link - Symbol(button) - hyperlink

9b. Reddit link - Symbol(button) - hyperlink

9c. Twitter link - Symbol(button) - hyperlink

## Functions
1. Buy / Sell; triggers the browser webapp to produce (3) pending transactions, first it queues 'approve' at the token's contract address for the stated amount, then 'createBuyOrder' or 'createSellOrder' depending on if it is a buy or sell, then lastly; 'settleOrders' at the exchange contract. 
The frontend uses the target token's contract address and provided Order type for 'settleOrders'. This causes the contract to instantly settle an order once posted if sufficient tokens exist for doing so. 

Note; the contract parses all relevant information to produce the queued transaction, such as the price, when a user inputs an amount to 'buy', the contract checks the order amount supplied by the user and price stored by the exchange. 
Then divides the order amount by price. For example if the base price is 104 and the token price is 1, while the user wants to buy 10 units, but this token also has zero decimals. The operations goes as; 10 / 104 = 0.096153… (AVAX), this is the amount that will be used to create the order and therefore what the user will ultimately sign. 

Note; when the user attempts to sell; the frontend should be mindful of the number of decimals the token has, for a token like DXH an input of 1000 is still 1000, but for a token with 8 decimals, 1000 should be parsed to 100000000000 before being queued for signing in a sell order. 

Note; if price changes while the user is signing this doesn't disqualify their order, it only affects the final settlement amount. 

3. clear order ; triggers the browser webapp to produce a  single pending transaction for 'clearOrders' at the exchange contract, requests signature at wallet, broadcasts once signed. 

4. Clear all orders ; triggers the browser webapp to produce (2) pending transaction for 'clearOrders' at the exchange contract, requests signature at wallet, broadcasts once signed. When both are signed the exchange will clear all pending orders older than 40 seconds. 

4. Take buy; triggers the browser webapp to produce (2) pending transactions, the first approves the amount being spent via the token's contract address, and the second queues the user to call 'takeBuyOrder' at the exchange contract using the inputted data, requests signature at the wallet, broadcasts once signed. 

Note; each "takeBuy" deducts [TOKEN] from the taker's balance to settle the maker. 

5. Take sell; triggers the browser webapp to produce (1) pending transaction which queues the user to call 'takeSellOrder' at the exchange contract using the inputted data, requests signature at the wallet, broadcasts once signed. 

Note; each "takeSell" deducts AVAX from the taker's balance to settle the maker. 

6. Mint Now; triggers the browser webapp to produce a pending transaction to call 'mint' at the Peng NFT contract using the number set in the  "Mint number" as the "mintAmount" then multiplying the mint number by 14000 to get the detail set in "mint" (payable amount), and lastly setting self address in "_to(address)". So if the user wanted to mint 2 Pengs, this would charge them 28000 AVAX. 

7. List Token; Once clicked, first creates a prompt showing current listing cost, requires a query at the exchange contract to return 'Listing Cost'. User needs to click "accept" or "reject" once listing cost is displayed, the webapp produces (2) pending transaction, the first queues a call for 'approve' at the DXH token address for 2x the listing cost, the second queues a call for 'listToken' at the exchange contract with the provided details. 

## Images
Image 1 : 
<img src="https://files.catbox.moe/tbltve.png" width="100" height="100">

Image 2 : 
<img src="https://files.catbox.moe/t3ip3h.png" width="350" height="200">

Image 3 :
<img src="https://files.catbox.moe/848pit.png" width="300" height="100">

Image 4 :
<img src="https://files.catbox.moe/8bqw6x.png" width="300" height="100">

Image 5 :
<img src="https://files.catbox.moe/ew0629.png" width="300" height="100">


## Labels and PreWraps
- Label 1 ; "Token Contract Address"

- Label 2 ; "Amount" 

- Label 3 ; "Price"

- Label 4 ; "(R) Amount" 

- Label 5 ; "(R) Threshold" 

- Label 6 ; "Parity address" 

- Label 7 ; "Listing price (in DXH)"

- Label 8 ; "# to Mint" 

- PreWrap 1; shows token name and symbol once queried. Query triggers the browser webapp to fetch 'Name' and 'Symbol' at the target token's contract address. The returned data is updated in the required field. Typically this replaces any information inputted in the "contract" field. 

- PreWrap 2 ; shows the estimated cost or settlement amount, if the order is a "buy" it shows the cost, if "sell' it shows the settlement amount. Cost is gotten through the process explained in "Function Buy / Sell". While settlement amount is gotten by dividing the stated amount by the relative price (base price / token price). If the base price is 104 and token price is 1, then relative price is 104. In this case if the user was selling 1000 TOKEN, this is 1000 / 104 = 9.615384… (AVAX). 

After the settlement amount is accepted, the frontend replaces it with a second popup after 5 seconds which displays one of the following messages at random;

"The taker menu looks good this time of year" 

"Wise man say; he who takes order is rewarded - Chinese proverb"

"Everyone loves order takers"

"Take order! Take order! Take order!" 

"All order takers achieve convergence" 

"Many orders remain untaken, will you not take up this challenge?"

"Got AVAX? Go take some orders!" 

"You like to make orders? that's a bit take-phobic" 

"Experts find that taking orders greatly increases your quality of life" 

"Making orders isn't very... peng, try taking some instead"

"Are you really all by yourself making orders?" 

"TFW he made an order" 

"Congrats, you didn't take an order today"  

- PreWrap 3 ; This displays existing orders for the target token, with respect to amount and order type
PreWrap 3 once triggered calls 'queryOrdersByToken' at the exchange contract, it queries from 0,1,2,3... until it reaches a number without an order, it then presents only their pending amount and principal. Indicating [TOKEN] and AVAX. 

The panel for displaying this must dynamically expand or have a scroll wheel 

Label is; "Query all orders for target token"

- PreWrap 4 ; This procedure triggers the browser webapp to fetch DXH/AVAX price from the 'PriceDAO', then present it in the required panel. If the price returns "64" then the price is displayed as "64 DXH to 1 AVAX". Querying the price a second time presents the DXH/USD price, which is acquired by fetching AVAX/USD from a target Chainlink oracle contract, then dividing AVAX/USD by DXH/AVAX, replacing the previous value in the price field. 

- PreWrap 5 ; This displays how many Pengs are left for minting once queried, the amount is gotten by querying "totalSupply", then subtracting 1000 by the current supply. 
Label is; "Pengs?" until a number is queried 

- PreWrap 6 ; This first queries a target token's contract address for its name, then queries the exchange contract for the target token's listing slot, getting the Balance-x and Balance-y, then presenting the data in required fields. Example; if the token has 100 in Balance-x and 10 in Balance-y, the dapp displays it as; "100AVAX : 10[TOKEN]".
[TOKEN] is replaced with the actual token ticker gotten at the begining of the process

- PreWrap 7 ; This is a potentially slow process which queries 'viewTokenByIndex' querying tokens one after the other from 1,2,3,4... until it hits an empty slot. It presents the data acquired in the respective fields. 

It parses the price base from unit256 to string.  

(This process queries all listings by their slot one after the other)

Label is; "Query all listings"
This query presents tokens as only their contract address, slot number and price

## Subheadings
- Subheading 1; "Swap Dx tokens for AVAX and vice versa! List your own pegged tokens relative to gold or any dataset! Dexhune is a peer-based distributed exchange that connects buyers and sellers directly using fixed pricing derived from a decentralized oracle, liquidity is enhanced by single-sided non-removable liquidity pools."  

- Subheading 2; "Your wallet is not connected, please click (symbol - wallet connect)"

- Subheading 3; " "To swap a listed token; insert the contract address where specified, input your desired amount, query name (optional), then execute using "buy" or "sell". 

- Subheading 4; "To cancel an order, use the 'Clear Orders' button, note that this will clear all pending orders on the exchange and cost you transaction fees"

- Subheading 5; "when an order is made the contract will automatically attempt to settle it, if it cannot then it awaits a 'taker', if a transaction persists for too long without a taker, you may cancel it using 'clear order'"

- Subheading 6; "Because the exchange is peer based, someone has to take orders before they settle, doing so can yield rewards if they are enabled for the target token and if sufficient balance exists. Use the 'taker' menu to take orders"

- Subheading 7; "Peng NFTs are used to vote on the oracle, mint one to get rewards in DXH when you successfully propose new price, each Peng costs 18000 AVAX, all funds from mint go into DXH token non-removable liquidity"

- Subheading 8 ; "The listing menu allows you to list new tokens onto the exchange, this will cost you a listing fee, query the listing fee by attempting to list a token. You can also view all listed token addresses, but be warned, some tokens might be malware or scams, there are a maximum of 1,000,000 slots, viewing listed tokens might take some time depending on how many tokens are listed"

- Subheading 9 ; "Use this price field to get the latest DXH/AVAX price, query twice to get the latest DXH/USD price, the latter is acquired via Chainlink"

## Details  
- fields; have a simple loading animation when a query is in progress. Animation is replaced by the fetched data

## Examples
E1 : Once a user puts a contract address in the "Token Address" field, this begins building their order, once they add "Amount" and "Buy or sell" the details they added get used to call 'createBuyOrder' or 'createSellOrder'. So if they wrote; Contract; 0x23fg...f0d3, Amount; 1000, and "Buy", this writes the data as required for 'makeOrder', setting "Order type" to "True"

E2 : Once a user clicks "Buy" or "Sell", the frontend first creates a popup showing their settlement amount or estimated cost as per "Prewrap 2".

## Notes
Template is "2dvanced Studios" website except in a red tone:  

![](https://files.catbox.moe/hm9onb.png)

https://www.webdesignmuseum.org/gallery/2advanced-studios-v3-2001

- All images should be very small and low resolution (less than 20kb in size, condense accordingly). 
text should be white but set against dark red  or black panels

- Adjustments should be made as necessary to the DXH logo in "image 1", colors should be from a similar palette and should be relatively low saturation and low brightness

- Any and all images should be edited to a red tone as seen in the template
 
- Transactions such as  'createSellOrder' and 'takeBuyOrder' ; will need to call 'approve' first at the target token's contract address, this adds an extra transaction to the queue, the amount approved is whatever amount was specified for trade, this means approval must be given each time.

- Scale text size on labels and Text buttons to fit, centered text format. 

- Any button with "Query(...)" simply says "Query". 

- Image 3, 4 and 5 should appear at the bottom right side of the page, recolored to fit the red theme. 

- Blockchain links should use avax network explorer and not Snowtrace. 

- Abstraction if necessary; when users input amounts like 1000, with tokens that have a certain number of decimals, assuming that number is 18, the actual input is 1000000000000000000000. The Dapp converts string data to relevant uint decimal structure, meaning upon execution of each order it checks how many decimals the token has, before parsing the "amount" field and presenting a transaction for the wallet to sign. 

## Rationale
The Dexhune web interface is a local client that queries certain data from the blockchain in regards to the Dexhune smart contracts, the client broadcasts transactions via the user's wallet. 

The Dexhune web interface uses a public RPC in carrying out any web3 functions, none of the interface's functions are carried out automatically, commonly automatic functions such as wallet connect do not occur automatically, they must be invoked. There are no animations on the page save for the "query loading". All images are very low resolution, almost pixelated.

The interface is segmented into different areas for different actions. "4" is the Maker menu, "5" is the Taker menu, "6" is the Order book, "7" is the NFT minting menu, and lastly "8" is the Token listing menu. 

The interface is hosted using IPFS via Dappling, while the domain name is acquired from Avvy domains. All these elements will be "renounced" once fully completed and audited.    


