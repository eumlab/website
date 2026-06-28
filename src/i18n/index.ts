import type { Strings } from './strings/types';
import en from './strings/en';
import de from './strings/de';
import fr from './strings/fr';
import es from './strings/es';
import zh from './strings/zh';
import ja from './strings/ja';

export * from './config';
export type { Strings } from './strings/types';

const DICTS: Record<string, Strings> = { en, de, fr, es, zh, ja };

export function getStrings(code: string): Strings {
  return DICTS[code] ?? en;
}
