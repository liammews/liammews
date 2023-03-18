


function SEO({ link, title, description }: { link: string; title: string; description: string; }) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="https://www.liammews.com/og-image.png" />
      <meta name="twitter:url" content={link} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.liammews.com/og-image.png" />
    </head>
  )
}

export default SEO
