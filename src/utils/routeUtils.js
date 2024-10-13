import { routers } from '../router';

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
     * 将路径解析为数组
     * @param {string} path
     * @returns {string[]}
     */
    parsePathToArray(path) {
        const parsedPath = this.parsePath(path);
        const splitArray = parsedPath.split('/');
        let pathArray = [];
        for (const item of splitArray) {
            if (item && item !== '') {
                pathArray.push(item);
            }
        }
        return pathArray;
    },
    /**
     * currentPath 是否找不到
     * @param {string | null} currentPath
     * @returns {boolean}
     */
    isNotFound(currentPath) {
        if (currentPath === null) {
            return true;
        }
        for (const route of routers) {
            if (pathUtils.isSubPath(currentPath, route.path) || pathUtils.isPathEqual(currentPath, route.path)) {
                if (route.subGroup.length === 0 && pathUtils.isPathEqual(currentPath, route.path)) {
                    return false;
                } else {
                    for (const subGroup of route.subGroup) {
                        for (const subRoute of subGroup.sub) {
                            if (pathUtils.isPathEqual(currentPath, subRoute.path)) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    },
    /**
     * 比较 currentPath 是否为 parentPath 的子路径
     * 注意：parentPath 为根目录时始终返回 false
     * @param {string | null} currentPath
     * @param {string} parentPath
     * @returns {boolean}
     */
    isSubPath(currentPath, parentPath) {
        if (currentPath === null) {
            return false;
        }
        if (currentPath.startsWith(parentPath + '/')) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 判断两个路径是否相等
     * @param {string} path1
     * @param {string} path2
     * @returns {boolean}
     */
    isPathEqual(path1, path2) {
        const parsedPath1 = this.parsePathToArray(path1);
        const parsedPath2 = this.parsePathToArray(path2);
        return parsedPath1.length === parsedPath2.length && parsedPath1.every((value, index) => value === parsedPath2[index]);
    },
};

export function getRouterByPath(path) {
    path = pathUtils.parsePath(path);
    for (const route of routers) {
        if (pathUtils.isSubPath(path, route.path) || pathUtils.isPathEqual(path, route.path)) {
            if (route.subGroup.length === 0 && pathUtils.isPathEqual(path, route.path)) {
                return route;
            } else {
                for (const subGroup of route.subGroup) {
                    for (const subRoute of subGroup.sub) {
                        if (pathUtils.isPathEqual(path, subRoute.path)) {
                            return subRoute;
                        }
                    }
                }
            }
        }
    }
}
