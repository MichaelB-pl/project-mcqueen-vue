export default {
    name: 'app-menu',
    data() {
        return {
            pages
        };
    }
}

const pages = [

];

const pageConstructor = (name, path) => {
    return {
        name,
        path
    };
}