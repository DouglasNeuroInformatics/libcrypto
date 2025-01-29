import type { webcrypto } from 'node:crypto';

export * from './encryption.js';
export * from './hash.js';

declare global {
  type CryptoKey = webcrypto.CryptoKey;
  type CryptoKeyPair = webcrypto.CryptoKeyPair;
  const CryptoKey: webcrypto.CryptoKeyConstructor;
}
