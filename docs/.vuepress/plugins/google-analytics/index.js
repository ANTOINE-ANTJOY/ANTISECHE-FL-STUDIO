const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, ctx) => ({
    name: '@edwebcreations/google-analytics',
    define () {
        const { siteConfig = {}} = ctx
        const ga = options.ga || siteConfig.ga
        const GA_ID = ga || false
        return { GA_ID }
    },
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})