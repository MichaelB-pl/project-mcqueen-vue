export default {
    name: 'app-menu',
    data() {
        return {
            pages
        };
    }
}

const pages = [
    pageConstructor('Alfabet', '/alphabet')
];

function pageConstructor(name, path) {
    return {
        name,
        path
    };
}