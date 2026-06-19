import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "csr.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
    if (!db) {
        db = new Database(DB_PATH);
        db.pragma("journal_mode = WAL");
        db.exec(`
            CREATE TABLE IF NOT EXISTS csr_registrations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nama TEXT NOT NULL,
                email TEXT NOT NULL,
                telepon TEXT NOT NULL,
                jenis TEXT NOT NULL,
                nama_usaha TEXT NOT NULL,
                alamat TEXT NOT NULL,
                deskripsi TEXT,
                pesan TEXT,
                status TEXT NOT NULL DEFAULT 'MENUNGGU',
                created_at TEXT NOT NULL DEFAULT (datetime('now','localtime'))
            )
        `);
    }
    return db;
}

export interface CsrRegistration {
    id: number;
    nama: string;
    email: string;
    telepon: string;
    jenis: string;
    nama_usaha: string;
    alamat: string;
    deskripsi: string | null;
    pesan: string | null;
    status: string;
    created_at: string;
}

export function addCsrRegistration(data: Omit<CsrRegistration, "id" | "status" | "created_at">): CsrRegistration {
    const d = getDb();
    const stmt = d.prepare(`
        INSERT INTO csr_registrations (nama, email, telepon, jenis, nama_usaha, alamat, deskripsi, pesan)
        VALUES (@nama, @email, @telepon, @jenis, @nama_usaha, @alamat, @deskripsi, @pesan)
    `);
    const result = stmt.run(data);
    return {
        id: result.lastInsertRowid as number,
        ...data,
        status: "MENUNGGU",
        created_at: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
    };
}

export function getAllCsrRegistrations(): CsrRegistration[] {
    const d = getDb();
    const stmt = d.prepare("SELECT * FROM csr_registrations ORDER BY created_at DESC");
    return stmt.all() as CsrRegistration[];
}