import { getCollection } from 'astro:content'
export const getCategories = async () => {
    const posts = await getCollection('blog')
    const categories = new Set(posts.map(post => post.data.category))
    const categoryArray = Array.from(categories)

    // 将特定值排在最后
    const specificCategory = '其他'
    const sortedCategories = [
        ...categoryArray.filter(category => category !== specificCategory),
        ...categoryArray.filter(category => category === specificCategory)
    ]

    return sortedCategories
}

export const getPosts = async (max?: number) => {
    return (await getCollection('blog'))
        .filter(post => !post.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .slice(0, max)
}

export const getTags = async () => {
    const posts = await getCollection('blog')
    const tags = new Set(posts.map(post => post.data.tags).flat())
    return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
    const posts = await getPosts()
    return posts.filter(post => post.data.tags.includes(tag))
}

export const filterPostsByCategory = async (category: string) => {
    const posts = await getPosts()
    return posts.filter(post => post.data.category.toLowerCase() === category)
}
