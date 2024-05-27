/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
        remotePatterns: [
            {hostname: "digitalracoon-production.up.railway.app", protocol: "https", port: ""}
        ]
    }
};

module.exports = nextConfig
