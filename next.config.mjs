/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        // serverActions: true,
        // mdxRs: true,
        // serverComponentsExternalPackages: ['mongoose']
      },
    },
  };
  
  export default nextConfig;
  