import siteData from 'siteData';
import Head from 'next/head';

export function MetaHead(props) {
  const { date, title, imageUrl, description, ogUrl } = props;
  const titleName = title || siteData.title;
  
  // Generate dynamic OG image URL if no imageUrl is provided
  const ogImageUrl = imageUrl || 
    `${siteData.websiteUrl || process.env.NEXT_PUBLIC_SITE_URL || ''}/api/og?title=${encodeURIComponent(titleName)}${date ? `&date=${encodeURIComponent(date)}` : ''}`;

  return (
    <Head>
      <title>{titleName}</title>
      <meta name="robots" content="follow, index" />
      <meta content={description || titleName} name="description" />
      <meta property="og:site_name" content={siteData.author} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={siteData.title} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={siteData.websiteUrl} />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={titleName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      {date && <meta property="article:published_time" content={date} />}
    </Head>
  );
}