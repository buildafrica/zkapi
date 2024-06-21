# Tutorial Contracts

Tutorial contracts for zkPass Transgate JS-SDK.

## Compile

```bash
```bash
npx hardhat compile 
```
## Test
```bash
npx hardhat test
```

## Deploy
Update the network information within the hardhat.config.js

```bash
npx hardhat run scripts/deploy.verifier.js --network xxx
npx hardhat run scripts/deploy.attestation.js --network xxx
```

```
Deploying contracts with the account: 0xb72430b16657a7463a9dBb5d4645b3dC539B6e6b
SampleAttestation address: 0xD332989aA911045bd4C15C3B57bEf80D01f4D699
✨  Done in 7.17s.
```

```
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
ProofVerifier address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

