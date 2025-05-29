//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {
    // svgr: true, // Deprecated - configure SVGR manually if needed
    // babelUpwardRootMode: true,
  },
  // Ensure the build output is optimized
  output: 'standalone',
  // Disable experimental features that might cause issues
  experimental: {
    // Disable features that might not work well in Vercel
  },
  // Transpile shared UI library for better compatibility
  transpilePackages: ['@metaba-platform/shared-ui'],
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
