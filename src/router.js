export const routerRootPathList = { home: '/', introduction: '/introduction', components: '/components', api: '/api', more: '/more' };

export const routers = [
    {
        id: 'home',
        path: routerRootPathList.home,
        icon: 'home',
        subGroup: [],
    },
    {
        id: 'introduction',
        path: routerRootPathList.introduction,
        icon: 'sentiment_satisfied',
        subGroup: [],
    },
];
