import CaseStudyLayout from '@/components/CaseStudyLayout';
import { HiOutlineLightningBolt, HiOutlineCode, HiOutlineSwitchHorizontal, HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineCube, HiOutlineDatabase, HiOutlineCog, HiOutlineGlobe } from 'react-icons/hi';

const project = {
  title: 'MIDAS',
  heroLabel: 'Automated Trading Bot',
  tagline: 'Modular Intelligence Designed to Automate Smart contracts. An automated crypto arbitrage bot that exploits price inefficiencies across decentralised exchanges using flash loan arbitrage on the Ethereum Virtual Machine. No upfront capital required. Fully autonomous. Executes in a single atomic transaction.',
  description: [
    'Flash loan arbitrage is one of the most technically demanding strategies in decentralised finance. A flash loan is an uncollateralised loan that must be borrowed and repaid within the same blockchain transaction. If the loan is not repaid by the end of that transaction, the entire operation is reverted as though it never happened, meaning zero risk of lost capital. MIDAS exploits this by borrowing large sums, executing trades across multiple decentralised exchanges where price discrepancies exist, and repaying the loan plus fees, all within a single atomic transaction on the Ethereum blockchain.',
    'The Ethereum Virtual Machine is the runtime environment that powers all smart contracts on Ethereum and EVM-compatible chains. Every transaction, token swap, and DeFi interaction is executed as bytecode on the EVM. MIDAS operates entirely on-chain through custom Solidity smart contracts that encode the full arbitrage logic: borrow from a lending protocol, swap across DEX pairs where prices are misaligned, capture the profit spread, repay the flash loan, and pocket the difference. The entire sequence executes in a single block with no human intervention.',
    'The bot continuously monitors liquidity pools across decentralised exchanges like Uniswap, SushiSwap, and PancakeSwap, scanning for price inefficiencies in real time. When a profitable route is detected, MIDAS simulates the transaction off-chain to verify profitability after gas costs, then submits the transaction to the mempool. The modular architecture means new DEXs, lending protocols, and token pairs can be plugged in without rewriting core logic.',
  ],
  tags: ['Solidity', 'TypeScript', 'Ethers.js', 'Hardhat', 'Flash Loans', 'EVM', 'DeFi'],
  features: [
    { icon: <HiOutlineLightningBolt />, title: 'Flash Loan Execution', description: 'Borrows uncollateralised capital, executes multi-hop swaps, and repays the loan in a single atomic transaction. If any step fails, the entire operation reverts.' },
    { icon: <HiOutlineSwitchHorizontal />, title: 'Cross-DEX Arbitrage', description: 'Scans price discrepancies across Uniswap, SushiSwap, PancakeSwap, and other AMMs to find profitable swap routes between token pairs.' },
    { icon: <HiOutlineCode />, title: 'Solidity Smart Contracts', description: 'Custom on-chain contracts encoding the full arbitrage logic: borrow, swap, validate profit, repay. Immutable, trustless, and fully autonomous.' },
    { icon: <HiOutlineCube />, title: 'EVM Execution', description: 'Runs entirely on the Ethereum Virtual Machine. Every operation is executed as bytecode across EVM-compatible chains including Ethereum, BSC, and Polygon.' },
    { icon: <HiOutlineChartBar />, title: 'Real-Time Pool Monitoring', description: 'Continuously monitors liquidity pool reserves and pricing across multiple decentralised exchanges, detecting profitable opportunities in milliseconds.' },
    { icon: <HiOutlineCog />, title: 'Off-Chain Simulation', description: 'Simulates transactions locally before submitting to the mempool. Verifies profitability after gas costs to avoid unprofitable executions.' },
    { icon: <HiOutlineDatabase />, title: 'Modular Architecture', description: 'New DEXs, lending protocols, and token pairs plug in without rewriting core logic. Each module handles its own swap interface and routing.' },
    { icon: <HiOutlineShieldCheck />, title: 'Atomic Risk Model', description: 'Zero capital risk by design. Flash loans must be repaid within the same transaction or the entire operation reverts. No liquidation, no exposure.' },
    { icon: <HiOutlineGlobe />, title: 'Multi-Chain Support', description: 'Deploys across any EVM-compatible blockchain. One contract architecture that works on Ethereum mainnet, Binance Smart Chain, Polygon, and Arbitrum.' },
  ],
  learnings: [
    'Writing production Solidity smart contracts with gas optimisation and security-first design patterns.',
    'Understanding the Ethereum Virtual Machine at the bytecode level and how transactions are executed on-chain.',
    'Implementing flash loan integrations with Aave and dYdX lending protocols.',
    'Building real-time monitoring systems that track liquidity pool reserves across multiple DEX protocols.',
    'Designing modular contract architectures where new swap interfaces plug in without redeployment.',
    'Simulating complex multi-hop swap transactions off-chain to verify profitability before execution.',
    'Managing gas estimation and transaction pricing strategies to ensure profitable execution.',
    'Working with Ethers.js and Hardhat for contract deployment, testing, and mainnet interaction.',
    'Understanding automated market maker mechanics including constant product formulas and slippage calculation.',
    'Navigating mempool dynamics and front-running risks in competitive DeFi arbitrage environments.',
  ],
  prevProject: { title: 'Gro', href: '/portfolio/gro' },
  nextProject: { title: 'MyPropertyPal', href: '/portfolio/mypropertypal' },
};

export default function MidasPage() {
  return <CaseStudyLayout project={project} />;
}
