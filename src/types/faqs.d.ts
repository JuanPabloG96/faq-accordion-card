// faqs.d.ts
declare module '../json/faqs.json' {
  export interface Faq {
    question: string;
    answer: string;
  }

  export interface Faqs {
    faqs: Faq[];
  }

  const data: Faqs;
  export default data;
}