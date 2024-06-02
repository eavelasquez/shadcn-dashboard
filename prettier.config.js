const styleguide = require('@vercel/style-guide/prettier');

/**
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions &
 *       import("@ianvs/prettier-plugin-sort-imports").PluginConfig}
 */
module.exports = {
  ...styleguide,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/context/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/app/(.*)$',
    '^@/.*$',
    '',
    '^[./]',
  ],
  plugins: [
    ...styleguide.plugins,
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
};
