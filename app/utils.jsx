export const getNamePage = (pathname) => {
    const path = pathname.split('/').filter((item) => item !== '');
    return path[path.length - 1];
    };