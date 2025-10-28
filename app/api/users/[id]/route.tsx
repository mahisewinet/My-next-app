import { NextRequest, NextResponse } from "next/server";
import schema from '../schema';

interface Props {
    params: Promise<{id: string}>
};

export async function GET(request: NextRequest, {params}: Props){
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);

    if (Number(id)>10)
        return NextResponse.json({error: 'User not found'}, {status: 404});
    return NextResponse.json({id:1, name: 'Mahi'});
}

export async function PUT(request: NextRequest, {params}: Props){
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);

    const body = await request.json();
    // if(!body.name)
    //     return NextResponse.json({error: 'Name is required'}, {status: 400});
    
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.message, {status: 400});

    if(id >10)
        return NextResponse.json({error: 'User not found'},{status: 404});

    return NextResponse.json({id: 1, name: 'Seni'})
}

export async function DELETE(request: NextRequest, {params}: Props){
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);

    if(id>10)
        return NextResponse.json({eror: 'User not found'}, {status: 404});

    return NextResponse.json({});
}