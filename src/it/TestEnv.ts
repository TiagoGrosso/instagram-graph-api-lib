import * as dotenv from 'dotenv';
import { Client } from '../main/Client';

dotenv.config();

export function getPageId(): string {
    return process.env.PAGE_ID ?? '';
}

export function getPageAccessToken(): string {
    return process.env.PAGE_ACCESS_TOKEN ?? '';
}

const client = new Client(getPageAccessToken(), getPageId());

export function getClient(): Client {
    return client;
}
