/** @type {import('next').NextConfig} */

const nextConfig = {

  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'xqttffltnnhneccvbupx.supabase.co',
        port:'',
        pathname: '/storage/v1/object/sign/imagen/**',

      }

    ]

  }
};

export default nextConfig;
