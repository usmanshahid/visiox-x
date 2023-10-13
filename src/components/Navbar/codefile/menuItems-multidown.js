export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'Technology Consulting',
        url: 'web-design',
      },
      {
        title: 'Software  development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node',
              },
              {
                title: 'PHP',
                url: 'php',
              },
            ],
          },
        ],
      },
      {
        title: 'IT Outsourcing Partner',
        url: 'seo',
      },
      {
        title: ' Business Intelligence',
        url: 'seo',

      },
      {

        title: ' CTO as a Service',
        url: 'seo',

      }

    ],
  },
  {
    title: 'Technologies',
    url: '/about',
    submenu: [
      {
        title: 'Computer Vision',
        url: 'who-we-are',
      },
      {
        title: 'OCR/NLP',
        url: 'our-values',
      },
      {
        title: 'AUGMENTED / VIRTUAL REALITY',
        url: 'our-values',
      },
      {
        title: 'Blockchain',
        url: 'our-values',
      },
    ],
  },
  {
    title: 'Industries',
    url: '/about',
    submenu: [
      {
        title: ' ECOMMERCE & RETAIL',
        url: 'who-we-are',
      },
      {
        title: 'Quick Service Resturants',
        url: 'our-values',
      },
      {
        title: 'Energy ,Utilities & Power',
        url: 'our-values',
      },
    ],
  },
  {
    title: 'Resources',
    url: '/about',
    submenu: [
      {
        title: 'Blog ',
        url: 'who-we-are',
      },
      {
        title: 'Careers',
        url: 'our-values',
      },

    ],
  },
  {
    title: 'Get Started',
    url: 'our-alues',
  }

];
