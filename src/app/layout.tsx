
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Infant Jesus Matriculation Hr. Sec. School | Vallalar Nagar, Pattabiram',
  description: 'Infant Jesus Matriculation Higher Secondary School in Vallalar Nagar, Pattabiram offers a warm, community-focused matriculation education for every student.',
  keywords: ['Infant Jesus Matriculation School', 'Vallalar Nagar school', 'matriculation school Pattabiram Avadi'],
  alternates: {
    canonical: 'https://infantjesusmatric.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'Infant Jesus Matriculation Higher Secondary School',
  url: 'https://infantjesusmatric.edu.in',
  telephone: '+917448507758',
  email: 'infantjesusmatric.pattabiram@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Main Street, Vallalar Nagar, Thandurai, Pattabiram',
    addressLocality: 'Avadi',
    addressRegion: 'Tamil Nadu',
    postalCode: '600072',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.11581,
    longitude: 80.06055,
  },
  hasMap: 'https://maps.google.com/?q=13.11581,80.06055',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#F7FAFC] text-[#52606D] antialiased min-h-screen">
        <SmoothScrollProvider>
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
              </SmoothScrollProvider>
</body>
    </html>
  );
}