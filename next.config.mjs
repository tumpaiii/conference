const nextConfig = {
  experimental: { cpus: 2 },
  webpack(config) {
    const imageRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );
    if (imageRule) imageRule.exclude = /\.svg$/i;
    config.module.rules.push({
      test: /\.(mp4|svg)$/i,
      type: "asset/resource",
      generator: { filename: "static/media/[name].[contenthash:8][ext]" },
    });
    return config;
  },
};
export default nextConfig;
