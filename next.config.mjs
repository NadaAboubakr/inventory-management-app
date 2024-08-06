// @type {import('next').NextConfig} 
// const nextConfig = {};

// export default nextConfig;
module.exports = {
    experimental: {
      // Add other experimental features if you use any
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap');
      }
  
      config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]]
        }
      });
  
      return config;
    },
    reactStrictMode: true,
  };
  