const resolvers = {
    Query: {
        async getArticle(root, { id, articleSlug }, { models }) {
            return models.Article.findOne({ where: { id, articleSlug } });
        },
        async getAllArticles(root, args, { models }) {
            return models.Article.findAll();
        },
    },
    Mutation: {
        async createArticle(
            root,
            { articleTitle, articleSlug, articleContent },
            { models },
        ) {
            return models.Article.create({
                articleTitle,
                articleSlug,
                articleContent,
            });
        },
    },
};

module.exports = resolvers;
