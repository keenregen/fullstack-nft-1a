const hre = require("hardhat");

async function main() {
  const FullA = await hre.ethers.getContractFactory("FullA");
  const fullA = await FullA.deploy();

  await fullA.deployed();

  console.log("FullA deployed to:", fullA.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
