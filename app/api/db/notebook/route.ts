import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { id, user_id } = await request.json();
    const result = await sql`
    SELECT * FROM notebooks
    WHERE id = ${id} AND user_id = ${user_id};
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { id, user_id } = await request.json();
    const result = await sql`
      INSERT INTO notebooks (id, user_id)
      VALUES (${id}, ${user_id});
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, title, content } = await request.json();
    const result = await sql`
      UPDATE notebooks
      SET title = ${title}, content = ${content}
      WHERE id = ${id}
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
