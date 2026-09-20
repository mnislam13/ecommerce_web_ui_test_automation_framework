import * as fs from 'fs';
import * as path from 'path';

export class DataHelper {
    static readCSV(filePath: string): any[] {
        const csvPath = path.resolve(filePath);
        const csvContent = fs.readFileSync(csvPath, 'utf-8');
        const lines = csvContent.trim().split('\n');
        const headers = lines[0].split(',');

        const data = lines.slice(1).map(line => {
            const values = line.split(',');
            const obj: any = {};
            headers.forEach((header, index) => {
                obj[header.trim()] = values[index]?.trim() || '';
            });
            return obj;
        });

        return data;
    }

    static generateRandomEmail(): string {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `testuser${timestamp}${random}@test.com`;
    }

    static generateRandomString(length: number = 8): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
}