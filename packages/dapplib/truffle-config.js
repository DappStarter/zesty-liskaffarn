require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strategy cruise soap history grid credit frame tag'; 
let testAccounts = [
"0xfabe977f2d1866aae39d34df60deacbccca405f6b539f72d643ebc26fd983d80",
"0xa61b7c669e1f54618bb5700b5055d9d7cb1388e54d0afe04389d9beac80122fb",
"0xbfcfe4c17285ea6e140d1ccaeaa7a22951a968fa219c152e98b8942002939131",
"0x2335cd77d292767a7ced5b3f8bb402b7c935f37fe082d4486638a49645729670",
"0x8464c991281cbf4a642be1173164fe3a6b6fb58908b984c27aa2dbee6caf9a4b",
"0xbc0827e680eff0fa45c920b593ca08b447c0a74eeb17265770fa676699f2ecc7",
"0xc7cdb63c325311f1da846366add4f62fe1daac8119af7e90b298fc78166000d4",
"0x62d19b7fd82f1442f3fbbb4aeb422f112aeb9046906e4d2cd0ed81195e513c6d",
"0x9d8846354aecc0fd4adcf8817b21716cea088e834687177776e10b790787b796",
"0x9b42cc3589d037ed9da708249756fec6ee24eb365a19ba7be88b143fd60f0a18"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

