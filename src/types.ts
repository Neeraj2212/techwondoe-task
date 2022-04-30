import { Asset, EntryFields, Entry } from 'contentful';

export interface Blog {
  titleImage: Asset;
  title: string;
  publishedDate: Date;
  description: EntryFields.RichText;
}

export interface Testimonial {
  name: string;
  designation: string;
  companyName: string;
  thought: EntryFields.RichText;
  avatar: Asset;
}

export interface Company  {
  title: string;
  companyLogo: Asset;
  domains: string[];
  services: string[];
  servicesGif: Asset;
  speciality: [
    {
      header: string;
      properties: string[];
    }
  ];
  Blogs: Entry<Blog>[];
  testimonials: Entry<Testimonial>[];
} 

export type ContextObject = Company | {};