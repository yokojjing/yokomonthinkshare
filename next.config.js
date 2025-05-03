// next.config.js
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
    // More specific configuration to handle the chrome-aws-lambda source maps
    config.module.rules.push({
      test: /\.map$/,
      include: /node_modules\/chrome-aws-lambda/,
      use: 'ignore-loader'
    });
    
    // Also add a general rule to ignore all source maps in node_modules
    config.module.rules.push({
      test: /\.js\.map$/,
      use: 'ignore-loader'
    });
    
    // Ignore source map warnings
    config.ignoreWarnings = [/Failed to parse source map/];
    
    return config;
  }
};