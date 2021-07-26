module.exports = {
    Query: {
        async getArticle(_, args, context) {
            const { Article } = context.models;
            const { id, articleSlug } = args;
            return Article.findOne({ where: { id, articleSlug } });
        },
        async getAllArticles(root, args, context) {
            const { Article } = context.models;
            return Article.findAll();
        },
    },
    Mutation: {
        async createArticle(root, args, { models }) {
            return models.Article.create(args.input);
        },
        async updateArticle(root, args, { models }) {
            const { id, input } = args;
            await models.Article.update(input, { where: { id } });
            return models.Article.findOne({ where: { id } });
        },
    },
};
