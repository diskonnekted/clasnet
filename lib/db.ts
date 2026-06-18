import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'submissions.json');

export interface Submission {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    service?: string;
    createdAt: string;
}

export function getSubmissions(): Submission[] {
    try {
        if (!fs.existsSync(dbPath)) {
            fs.writeFileSync(dbPath, '[]');
            return [];
        }
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading submissions:", error);
        return [];
    }
}

export function addSubmission(submission: Omit<Submission, 'id' | 'createdAt'>): Submission {
    const submissions = getSubmissions();
    const newSubmission: Submission = {
        ...submission,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString()
    };
    submissions.unshift(newSubmission);
    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 4));
    return newSubmission;
}

export function deleteSubmission(id: string): void {
    const submissions = getSubmissions();
    const filtered = submissions.filter(s => s.id !== id);
    fs.writeFileSync(dbPath, JSON.stringify(filtered, null, 4));
}
