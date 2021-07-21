const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.User.findAll({ where: { id } });
        },
        async allBooks(root, args, { models }) {
            return models.Book.findAll();
        },
        async book(root, { id }, { models }) {
            return models.Book.findAll({ where: { id } });
        },
    },
    Mutation: {
        async createUser(root, { name, email, password }, { models }) {
            return models.User.create({
                name,
                email,
                password,
            });
        },
        async createBook(
            root,
            { UserId, title, descreption, author },
            { models },
        ) {
            return models.Book.create({
                title,
                descreption,
                author,
                UserId,
            });
        },
    },
    User: {
        async book(user) {
            return user.getBooks();
        },
    },
    Book: {
        async user(book) {
            return book.getUser();
        },
    },
};

module.exports = resolvers;
