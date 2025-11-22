/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React compiler optimizations
    reactStrictMode: true,

    // Optimize production builds
    swcMinify: true,

    // Enable compression
    compress: true,

    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Production optimizations
    poweredByHeader: false,

    // Experimental optimizations
    experimental: {
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
};

export default nextConfig;
