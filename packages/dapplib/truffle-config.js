require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong reflect sad assume install hen equal gaze'; 
let testAccounts = [
"0xd3361e87d10e922e8f795e5c56779a93ca9785a6313f69c1773dff3a83722b91",
"0xddd99ea7229963e01434b89d4664e1dfe1fbb120d49fd5b2f217147c3f91b51a",
"0xa387681a5c8d4b0775027f028f1078937f708d1a75ab6c97eaf0f13658ced229",
"0xb9e301ec79a3ecbcda798d8f4b3d45627ed8ba8da75561fb77d9c0b0aed2f73d",
"0xf92b2f1b9a57e9681aa8ab5f7e2f0bb0f4fc0172e031db9479a46412038e9cee",
"0xe17bc0e0b17bc81a4fbf99c28769d5839cf5d39305d6ca0df3cce01877051ca7",
"0xaaa81ae9baf4d0dd40b30474faad8440ff992534adad72e39dacc302b97d8198",
"0x069cab06fec4616dadeca89ee8df5d83d07672fd70179e84f84ed422324d6a27",
"0xc1ea16f2c52eec136d06057aea85d83d762b0af6dcae9ef2dc67f333d22e33b5",
"0xa14519542000c285dfa0a5c4a16d954ea85bc95402099bf9ffaa655ba1605e43"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

