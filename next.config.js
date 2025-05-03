// next.config.js
module.exports = {
  // Combined Image Configuration
  images: {
    unoptimized: true, // Keep this if you intended it, otherwise remove it
    domains: [
      's3.us-west-2.amazonaws.com', // Images coming from Notion
      'via.placeholder.com', // for articles that do not have a cover image
      'images.unsplash.com', // For blog articles that use an external cover ima ge
      'pbs.twimg.com', // Twitter Profile Picture
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com',
      'nextjs-notion-blog-starter.vercel.app',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
      // Add any other domains you need here
    ]
  },

  // Add the Webpack configuration to ignore .map files
  webpack: (config, { dev, isServer }) => {
    // Rule to ignore source map files within node_modules
    config.module.rules.push({
      test: /\.map$/,
      use: 'ignore-loader',
    });

    // Optional: Ignore source map warnings if they appear
    // config.ignoreWarnings = [/Failed to parse source map/];

    // Important: return the modified config
    return config;
  },
};