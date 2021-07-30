const { AuthenticationError } = require("apollo-server");
const db = require("../config/connection");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

// const Query = {
//   me: async (root, args, context) => {
//     if (!context.user) throw new AuthenticationError("Not logged in");
//     const userData = await User.findOne({ _id: context.user._id }).select(
//       "-__v -password"
//     );
//     return userData;
//   },
// };

// const Mutation = {
//   login: async (root, args) => {
//     const user = await User.findOne({
//       $or: [{ username: args.username }, { email: args.email }],
//     });
//     if (!user) {
//       throw new AuthenticationError("Incorrect credentials");
//     }
//     const correctPw = await user.isCorrectPassword(args.password);

//     if (!correctPw) {
//       throw new AuthenticationError("Incorrect credentials");
//     }
//     const token = signToken(user);
//     return { token, user };
//   },
//   addUser: async (root, args) => {
//     const user = await User.create({
//       username: args.username,
//       email: args.email,
//       password: args.password,
//     });
//     const token = signToken(user);
//     return { token, user };
//   },
//   saveBook: async (root, { book }, context) => {
//     if (!context.user) {
//       throw new AuthenticationError("You're not logged in!");
//     }

//     try {
//       const updatedUser = await User.findOneAndUpdate(
//         { _id: context.user._id },
//         { $addToSet: { savedBooks: book } },
//         { new: true, runValidators: true }
//       );
//       return updatedUser;
//     } catch (err) {
//       console.log(err);
//       throw new AuthenticationError("You're not logged in!");
//     }
//   },
//   removeBook: async (root, args, context) => {
//     if (!context.user) throw new AuthenticationError("You're not logged in!");
//     const updatedUser = await User.findOneAndUpdate(
//       { _id: context.user._id },
//       { $pull: { savedBooks: { bookId: bookId } } },
//       { new: true }
//     );
//     return updatedUser;
//   },
// };

const Query = {
  hello: () => "Hello world!",
};

module.exports = { Query };
