import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // For now, redirect to the logo image
    // In production, you would generate a proper OG image
    return NextResponse.redirect(
      new URL("/images/solar-verse-logo.png", request.url)
    );
  } catch (e: unknown) {
    console.log(`${e instanceof Error ? e.message : "Unknown error"}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
