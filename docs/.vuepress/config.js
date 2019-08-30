module.exports = {
    base:"/blog/",
    title: '张琪阳',
    description: '一个前端工程师的博客',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}]
        ,
        ["link", { rel: "stylesheet", href: "/css/style.css" }],
        ["script", { charset: "utf-8", src: "/js/main.js" }]
    ],
    serviceWorker: true,
    markdown: {
        lineNumbers: true
    },
    
    themeConfig: {
        repo: 'itzqy/blog',
        docsDir: 'docs',
        // docsBranch: 'master:gh-pages',
        nav:require("./nav.js"),
        sidebar:require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '编辑文档 ！'
    }
}