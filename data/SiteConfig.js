const config = {
  // Set to your site's language/locale.
  language: 'en-UK',
  // Site title.
  siteTitle: 'Mic Drop',
  // Short site title for homescreen (PWA/Progressive Web Apps).
  // Staying under 12 characters will prevent any truncation on phone screens.
  siteTitleShort: 'Mic Drop',
  // Alternative site title for SEO.
  siteTitleAlt: 'Mic Drop: The menubar app for turning your microphone off, fast.',
  // Logo used for SEO and manifest.
  siteLogo: '/logos/logo-1024.png',
  // Domain of your website without pathPrefix.
  siteUrl: 'https://getmicdrop.com',
  // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  pathPrefix: '/',
  // Website description used for RSS feeds/meta description tag.
  siteDescription:
    'Mic Drop is a Mac menubar app to help you quickly mute (and then unmute!) your microphone. Designed for remote workers, user researchers, teacher, and anyone spending a lot of time on video.',
  // Path to the RSS file.
  siteRss: '/blog/rss.xml',
  twitter: '@octopusthinks',
  // Copyright string for the footer of the website and RSS feed.
  copyright: `Copyright ©${new Date().getFullYear()}. Octopus Think.`,

  // Ghost Ship Settings
  enableBlogAuthors: true,
  enableBlogTags: true,

  blogTitle: 'Our Blog',
  blogDescription: 'The blog of Ghost Ship, famed for its speed.',
  blogSummary:
    'AKA our blog, in which we talk about spooky ships and fast websites. It is quite the good time!',

  dateFormat: 'D MMMM YYYY',
  matomoOptions: {
    siteId: null,
    matomoUrl: 'https://your.matomoserver.com',
    siteUrl: 'https://yourdomain.com',
    requireConsent: false,
    // Removes the need for cookie notices and is less creepy! :-)
    disableCookies: true,
  },
  // Replace this with a Nautilus Theme object.
  // See: https://nautilus.octopusthink.com
  nautilusTheme: null, // require('./theme'),
  postsPerPage: 10,
  // When enabled this prefixes slugs with `date` data for the node, if set.
  // `useDatesInSlugs: false` -> `/blog/my-post/`
  // `useDatesInSlugs: true`  -> `/blog/2019-05-09-my-post/`
  useDatesInSlugs: true,
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
