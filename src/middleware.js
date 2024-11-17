// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Check if the request is for the root URL
  if (url.pathname === "/") {
    // Redirect to the Home page at /home
    url.pathname = "/en/home";
    return NextResponse.redirect(url);
  }

  // Continue with the request if it's not for the root URL
  return NextResponse.next();
}
