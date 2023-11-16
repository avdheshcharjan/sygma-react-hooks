import { useState, useEffect } from 'react';
import { EvmAssetTransfer, Environment } from '@buildwithsygma/sygma-sdk-core';
import { ethers } from 'ethers';

const useEvmTokenTransfers = () => {
  const [transfers, setTransfers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransfers = async () => {
      setLoading(true);
      try {
        const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_ETHEREUM_NODE_URL);
        const assetTransfer = new EvmAssetTransfer();
        await assetTransfer.init(provider, Environment.TESTNET);
        const wallet = new ethers.Wallet(process.env.REACT_APP_ETHEREUM_PRIVATE_KEY, provider);
        const transfers = await assetTransfer.getTransfers(wallet.getAddress());
        setTransfers(transfers);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTransfers();
  }, []);

  return { transfers, loading, error };
};

export default useEvmTokenTransfers;
