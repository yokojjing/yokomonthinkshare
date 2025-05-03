module.exports = {
  images: {
    // Your existing image configuration
    unoptimized: true,
    domains: [
      's3.us-west-2.amazonaws.com',
      'via.placeholder.com',
      'images.unsplash.com',
      'pbs.twimg.com',
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com',
      'nextjs-notion-blog-starter.vercel.app',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
    ]
  },
  
  webpack: (config, { isServer }) => {
    // Skip problematic dependencies
    if (!isServer) {
      config.resolve.alias['chrome-aws-lambda'] = false;
      config.resolve.alias['next-api-og-image'] = false;
      config.resolve.alias['puppeteer-core'] = false;
    }
    
    // Ignore map files
    config.module.rules.push({
      test: /\.map$/,
      use: 'ignore-loader'
    });
    
    // Ignore source map warnings
    config.ignoreWarnings = [/Failed to parse source map/];
    
    return config;
  }
};