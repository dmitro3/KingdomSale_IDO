async function main() {
    // We get the contract to deploy
    const IDO = await ethers.getContractFactory("IDO");
    const ido = await IDO.deploy();
  
    await ido.deployed();
  
    console.log("IDO deployed to:", ido.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });