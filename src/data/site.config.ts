interface SiteConfig {
    author: string
    title: string
    description: string
    lang: string
    ogLocale: string
    shareMessage: string
    paginationSize: number
}

export const siteConfig: SiteConfig = {
    author: 'Liuziting', // Site author
    title: 'SmartAI', // Site title.
    description: 'Artificial intelligence website tool collection.', // Description to display in the meta tags
    lang: 'en-GB',
    ogLocale: 'en_GB',
    shareMessage: 'Share this post', // Message to share a post on social media
    paginationSize: 6 // Number of posts per page
}
