import { NextResponse } from 'next/server';
import { getSubmissions, deleteSubmission } from '@/lib/db';

export async function GET() {
    try {
        const submissions = getSubmissions();
        return NextResponse.json(submissions);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to get submissions' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (id) {
            deleteSubmission(id);
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ error: 'ID required' }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
    }
}
