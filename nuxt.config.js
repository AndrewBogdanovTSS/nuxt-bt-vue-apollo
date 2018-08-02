export default {
    plugins: ['~/plugins/bootstrap-vue.js'],
    build: {
        transpile: ['bootstrap-vue']
    },
    modules: [
        '@nuxtjs/apollo',
    ],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://graphql.wonder.shop/graphql'
            }
        }
    }
}
