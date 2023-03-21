export const routes = {
    home: '/',
    posts: '/posts',
    postsShow: (id, slug) => `/posts/${id}/${slug}`,
    users: '/users',
    usersShow: (id, slug) => `/users/${id}/${slug}`,
}