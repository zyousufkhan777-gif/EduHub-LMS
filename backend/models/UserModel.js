const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default:
        "data:image/webp;base64,UklGRmoDAABXRUJQVlA4WAoAAAAQAAAA7wAA7wAAQUxQSJ8AAAABZ2Cmbdtw2/1TEFRDtIgIwWen6QHc1tqeLA8OHQNYBmARhxFoHQZgCO8ywt9B6W7ZKvVbchLR/wkA8puvk7qvxvHNx8mdxb2tE1wHOk5yCm6aGpifpn186kTnrqoKd1XDjyr7UxW54P/g/+D/4P/g/+D/P41fVfuPKvtU1bioqsxVZcxP0z7OXVMDuprSwE5RHcC89di4h1n/tES9GAAAVlA4IKQCAADwIQCdASrwAPAAPm02mUikIyKhItlJQIANiWlu62AzSMysjqAxxP3WsSIWeA6GGKSDFJBikgxSQYpIMUkGKSDFJBikgsy2Gzl92stOiKRlMg0YCxsMLM5lfAO1mMtlTFptluKROM5DoBcwrpuyTJ/0r/mITCdNux1ZuePFe472shmP2rtw4y6ZGvTV6V2u20WPVU4oqMcyMYzkVSggH9FZuZfkYjhYt8JzF/Sd4nHn53kcFvuf7r9Y4iyWXsA4WLf7Mv5l5BehWl8HxpwWe+yY28ydD8MXYoOI0WJhY1u91tGuYhrsyFInCAJJKlMnTikUHQ++KX+1q1Tq/1WDTmpkWVLGxEZFYwwxSQYpIMUkGKSDFJBikfoAAP7/OR/haiTd6vQdKdWPAIAABaVZ9T8q3LAqwAQXWl0ZoYoadanWXYPwScYkAhaBj/cSHZhEdMvROE3EgqujreKcU94kU70QKBjqJp78aqwOk9lZzEOhP1E0G64GGEyR9Ls5l6/tiVoYzsgo8dWw3cmsEl97iPTqWBRUlQCxzxksICluNcZv+g2eH+OdUEIGQtLdZrUMzeYOF1a91qKQ21eSymbNOo5n/a7Hwicgvn4Hn2pUw0nMvGBc91/Kn2w8ljEiuEGODEMQe2qAHIVfjM+/t7dqUH2tXTMqnAFJXhpUygmnx2ROZC7hHm6T2UO/WutibECglJF2C/bcMYYD4E/71514vsA5XcuOzlvQ9Rdjjjj0sgvWkjJf3nw2Ibs7Gw1zXUhvLhk1yLTIEG8JxyMfujOReBh6T2n4Hn2cogNwoEV59h9O4wp5V72H9L4oXL9pBd/npSaMylZJ5aCHo1ievQ/xgMwWmk/P+fbNI0rNR0YAmh5ZErUgK3mEngAAAAAELjnINRfOgAAA",
    },

    phone: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },

    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
    ],

    completedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
    ],

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.models.user || mongoose.model("user", UserSchema);

module.exports = userModel;
