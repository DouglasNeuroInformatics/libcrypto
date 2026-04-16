import type { webcrypto } from 'node:crypto';

declare global {
  type CryptoKey = webcrypto.CryptoKey;
  type CryptoKeyPair = webcrypto.CryptoKeyPair;
  const CryptoKey: webcrypto.CryptoKeyConstructor;
}

export * from './encryption.js';
export * from './hash.js';
