# Prediction Market DApp

A decentralized prediction market platform built on Ethereum where users can create, trade, and resolve prediction markets using META tokens. The platform implements automated market making for fair price discovery and provides an intuitive interface for market participation.

## Screenshots
<table>
  <tr>
    <td><img src="https://github.com/0xmetaschool/Prediction-market/blob/main/public/Prediction-Market-web3-template-Landing-Page.png" alt="Screenshot 4" width="600"></td>
    <td><img src="https://github.com/0xmetaschool/Prediction-market/blob/main/public/Prediction-Market-web3-template-Market-List.png" alt="Screenshot 1" width="600"></td>
    </tr>
      <tr>
    <td><img src="https://github.com/0xmetaschool/Prediction-market/blob/main/public/Prediction-Market-web3-template-Market-info.png" alt="Screenshot 2" width="600"></td>
    <td><img src="https://github.com/0xmetaschool/Prediction-market/blob/main/public/Prediction-Market-web3-template-Order-book.png" alt="Screenshot 4" width="600"></td>
  </tr>
</table>


## Live Demo
https://prediction-market-gamma.vercel.app/

## Features

- **Decentralized Prediction Markets:** Create and participate in prediction markets for any future event
- **META Token Integration:** Native platform token with faucet functionality for easy onboarding
- **Automated Market Making:** Implements LMSR (Logarithmic Market Scoring Rule) for efficient price discovery
- **Real-Time Market Data:** Track market prices, trading volumes, and positions
- **Secure Smart Contracts:** Built with OpenZeppelin standards and comprehensive security measures
- **Wallet Integration:** Seamless connection with MetaMask and other Web3 wallets

## Technologies Used

- **Frontend:** React.js, TailwindCSS
- **Blockchain:** Solidity, OpenZeppelin
- **Web3 Integration:** ethers.js
- **Development:** Vite, Node.js
- **Smart Contracts:** 
  - MetaToken (ERC20)
  - PredictionMarket (Core Logic)
  - Chainlink Keeper Integration


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jatin192/Prediction-market.git
   ```

2. Install dependencies:
   ```bash
   cd Prediction-market
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
Open your browser and navigate to http://localhost:5173.



## Usage Flow

1. **Connect Wallet:**
   - Connect your Web3 wallet (MetaMask recommended)
   - Ensure you're on the correct network

2. **Get META Tokens:**
   - Use the faucet to get META tokens
   - Wait 24 hours between faucet claims

3. **Participate in Markets:**
   - Browse available prediction markets
   - Create new markets
   - Buy/Sell positions
   - Track your portfolio

4. **Market Resolution:**
   - Markets are resolved based on real-world outcomes
   - Claim winnings from resolved markets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions and support, please open an issue in the GitHub repository.
