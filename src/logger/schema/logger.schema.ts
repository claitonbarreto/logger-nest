import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const LoggerSchema = new mongoose.Schema({
    message: String,
    date: Date,
    level: String,
    context: String,
    stack: String,
    user: String,
    userId: String,
});

export interface Logger {
    message: string;
    date: Date;
    level: string;
    context: string;
    stack: string;
    user: string;
    userId: string;
}