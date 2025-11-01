const nextConfig = {
  /* config options here */

  // For Docker deployment, use 'standalone'
  // For GitHub Pages deployment, use 'export'
  // Toggle based on deployment target
  output: process.env.DEPLOY_TARGET === 'github-pages' ? 'export' : 'standalone',

  // GitHub Pages configuration (only used when output is 'export')
  basePath: process.env.DEPLOY_TARGET === 'github-pages' ? '/marcus2v2-fyniq-portal' : '',
  assetPrefix: process.env.DEPLOY_TARGET === 'github-pages' ? '/marcus2v2-fyniq-portal/' : '',

  // Required for static export
  images: {
    unoptimized: true, // Required for static export
  },

  // Disable trailing slashes for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
