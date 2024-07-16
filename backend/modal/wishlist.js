import mongoose from 'mongoose';

const WishlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  wishlist: {
    type: [String],
    required: false,
  },
});

export default mongoose.model('Wishlist', WishlistSchema);