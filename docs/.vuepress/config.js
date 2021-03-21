module.exports = {
    dest: 'dist',

    title: 'Lexique FL Studio - Musique Pro',
    description: 'Glossaire FL Studio par Musique Pro',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],

    // theme: 'default-prefers-color-scheme',
    themeConfig: {
        // overrideThxeme: 'dark',
        // prefersTheme: 'dark',

        nav: [
            { text: 'Accueil', link: '/' },
            { text: 'A propos', link: '/about/' },
            { text: 'Musique-Pro', link: 'https://musique-pro.fr' }
        ],
        sidebar: [
            {
                title: 'Raccourcis',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/shortcuts'
                ]
            },
            {
                title: 'Glossaire',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/glossaire'
                ]
            },
        ],
        displayAllHeaders: true,
        /*
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>'
        }
        */
    },

    locales: {
        '/': {
            lang: 'fr-FR',
            title: 'Lexique FL Studio - Musique Pro',
            serviceWorker: {
                updatePopup: {
                    message: 'Une mise à jour est disponible',
                    buttonText: 'Rafraichir'
                }
            },
        }
    },

    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': '' // UA-00000000-0
            }
        ]
    ],
}