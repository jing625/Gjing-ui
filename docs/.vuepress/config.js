module.exports = {
    base: '/Gjing-ui/',
    title: 'Gjing-ui',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '指南', link: '/introduce/'},
            {text: '组件', link: '/components/button'},
            {text: 'GitHub', link: 'https://github.com/jing625/Gjing-ui'},
        ],
        sidebar: [
            {
                title: '指南',
                children: [
                    '/introduce/',
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                ]
            },

        ]
    }
}
