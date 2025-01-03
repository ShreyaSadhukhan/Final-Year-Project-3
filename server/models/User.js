import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
    next();
});

UserSchema.methods.comparePassword = async function (password) {
    return await compare(password, this.password);
};

export default model('User', UserSchema);