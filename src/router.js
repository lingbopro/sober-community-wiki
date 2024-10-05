export const routerRootPathList = { home: '/', introduction: '/introduction', components: '/components', api: '/api', more: '/more' };

export const pathUtils = {
    /**
     * 处理路径
     * @param {string} path 待处理路径
     * @returns {string}
     */
    parsePath(path) {
        let parsedPath = path;
        if (parsedPath.startsWith('#')) {
            parsedPath = parsedPath.substring(1);
        }
        if (!parsedPath.startsWith('/')) {
            parsedPath = '/' + parsedPath;
        }
        return parsedPath;
    },
    /**
     * 只按 routerRootPathList 来看，currentPath 是否找不到
     * @param {string | null} currentPath
     * @returns {boolean}
     */
    isNotFound(currentPath) {
        if (currentPath === null) {
            return true;
        }
        let found = false;
        for (const key in routerRootPathList) {
            const path = routerRootPathList[key];
            if (this.isSubPath(currentPath, path)) {
                found = true;
                break;
            }
        }
        return !found;
    },
    /**
     * 比较 currentPath 是否为 parentPath 的子路径，或者二者相等
     * 注意：parentPath 为根目录时始终返回 false
     * @param {string | null} currentPath
     * @param {string} parentPath
     * @returns {boolean}
     */
    isSubPath(currentPath, parentPath) {
        if (currentPath === null) {
            return false;
        }
        if (currentPath.startsWith(parentPath + '/') || currentPath === parentPath) {
            return true;
        } else {
            return false;
        }
    },
};
