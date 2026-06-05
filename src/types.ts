/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SearchResult {
  status: 'eligible' | 'not_eligible' | 'attention';
  message: string;
  details: string[];
}
