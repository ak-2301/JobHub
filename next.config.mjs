/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/jobs",
          destination: "http://localhost:8080/api/jobs",
        },
      ];
    },
  };

export default nextConfig;
