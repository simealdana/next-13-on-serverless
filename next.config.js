/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Nowhere to cache the images in Lambda (read only)
    unoptimized: true, // Next 12.3+, other "experimental -> images -> unoptimized"
  },
  output: "standalone", // THIS IS IMPORTANT
  i18n: {
    // providing the locales supported by your application
    locales: ["en-US", "es-ES", "it-IT"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
