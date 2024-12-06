import createNextIntlPlugin from 'next-intl/plugin';
import mdx from '@next/mdx';

const withNextIntl = createNextIntlPlugin();
const withMDX = mdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
            },
            {
                protocol: "https",
                hostname: "v0.dev",
                port: "",
            }
        ],
        dangerouslyAllowSVG: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withNextIntl(withMDX(nextConfig));
