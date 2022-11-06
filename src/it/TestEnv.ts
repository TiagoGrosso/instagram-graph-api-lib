import * as dotenv from 'dotenv';
import { Client } from '../main/Client';

dotenv.config();

/**
 * Gets the page id.
 */
export function getPageId(): string {
    return process.env.PAGE_ID ?? '';
}

/**
 * Gets the page access token.
 */
export function getPageAccessToken(): string {
    return process.env.PAGE_ACCESS_TOKEN ?? '';
}

const client = new Client(getPageAccessToken(), getPageId());

/**
 * Gets the client to create requests.
 */
export function getClient(): Client {
    return client;
}
