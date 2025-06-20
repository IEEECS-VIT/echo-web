import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { serialize } from 'cookie'; // FIXED IMPORT

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

    const accessToken = data.session.access_token;
    const refreshToken = data.session.refresh_token;

    const res = NextResponse.json({ user: data.user });

    res.headers.append(
        'Set-Cookie',
        serialize('sb-access-token', accessToken, { // FIXED USAGE
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax',
        })
    );
    res.headers.append(
        'Set-Cookie',
        serialize('sb-refresh-token', refreshToken, { // FIXED USAGE
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
            sameSite: 'lax',
        })
    );

    return res;
}
