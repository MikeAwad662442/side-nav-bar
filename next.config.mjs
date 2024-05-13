// export default nextConfig;
import createNextIntlPlugin from "next-intl/plugin"; // for next-intl i18n

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
