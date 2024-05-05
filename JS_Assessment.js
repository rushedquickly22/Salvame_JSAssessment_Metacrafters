/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtType, _bling, _rarity, _creator) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling,
        "rarity": _rarity,
        "creator": _creator
    }
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTs.length; i++){
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("Eye Color: \t" + NFTs[i].eyeColor);
        console.log("Shirt Type: " + NFTs[i].shirtType);
        console.log("Bling: \t\t" + NFTs[i].bling);
        console.log("Rarity: \t" + NFTs[i].rarity);
        console.log("Creator: \t" + NFTs[i].creator);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Number of NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("White Space", "Maroon", "Hoodie", "Gold Chains", "Basic", "Rushy Rushed");
mintNFT("Cosmic Trailblazer", "Magenta", "Polo", "Rolex Watch", "Starter", "Rushy Rushed");
mintNFT("Giant Little", "Blue", "Dress", "Diamond Necklace", "Standard", "Rushy Rushed");
mintNFT("Fiery Hangar", "Violet", "Tank Top", "Rubber Ducky Necklace", "Limited", "Rushy Rushed");
mintNFT("Toasty Oveneer", "Indigo", "Tuxedo", "Bag of Money", "Rare", "Rushy Rushed");
mintNFT("Breezy Cotton", "Gold", "Turtleneck", "Robotic Arm", "Mythical", "Rushy Rushed");
mintNFT("Hot and Hotter", "Chartreuse", "Crop Top", "Dollar Sign Glasses", "Secret Rare", "Rushy Rushed");
listNFTs();
getTotalSupply();
