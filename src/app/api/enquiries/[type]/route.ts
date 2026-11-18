import { NextResponse } from "next/server";
import { handleEnquiry } from "@/lib/enquiry-server";
import { formTypes, type FormType } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request, ctx: { params: Promise<{ type: string }> }) {
  const { type } = await ctx.params;
  if (!formTypes.includes(type as FormType)) {
    return NextResponse.json({ ok: false, message: "Unknown form." }, { status: 404 });
  }
  const result = await handleEnquiry(type as FormType, req);
  return NextResponse.json(result.body, { status: result.status, headers: { "Cache-Control": "no-store" } });
}

export function GET() {
  return NextResponse.json({ ok: false, message: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
}
