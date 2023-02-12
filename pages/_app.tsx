import Head from "next/head";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";
import { store } from '../data/store';
import { Provider } from 'react-redux';

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, bsc, bscTestnet, mainnet, polygon } from "wagmi/chains";



function App({ Component, pageProps }: AppProps) {
  const chains = [bscTestnet, bsc]

  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "c0d8c6d6c2c5e540f2149c7667544759" }),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId: "c0d8c6d6c2c5e540f2149c7667544759",
      version: "1", // or "2"
      appName: "GenesisApp",
      chains,
    }),
    provider,
  });

  const ethereumClient = new EthereumClient(wagmiClient, chains);
  console.log("ethereumClient", ethereumClient)





  return (
    <>
      
        <Head>
          <title>Genesis</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
        <WagmiConfig client={wagmiClient}>
          <Layout>
            <AnimatePresence>
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </WagmiConfig>
      </Provider>
      <Web3Modal projectId={"c0d8c6d6c2c5e540f2149c7667544759"} ethereumClient={ethereumClient} />
    </>
  );
}

export default appWithTranslation(App);
