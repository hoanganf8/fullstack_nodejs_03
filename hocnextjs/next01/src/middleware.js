import { NextResponse } from "next/server";

const isAuth = true;
export const middleware = (request) => {
  //Request
  const userAgent = request.headers.get("user-agent");
  const pathname = request.nextUrl.pathname;
  console.log(pathname);
  //   const username = request.cookies.get("username");
  //   const email = request.cookies.get("email");
  //   console.log(username);
  //   console.log(email);

  //Response
  if (pathname.startsWith("/san-pham") && !isAuth) {
    const urlLogin = new URL("/auth/login", request.url);
    return NextResponse.redirect(urlLogin);
  }

  const response = NextResponse.next();
  response.headers.set("x-api-key", "1234");
  response.cookies.set({
    name: "abc",
    value: "xyz",
    maxAge: 3600,
    httpOnly: true,
  });
  response.cookies.delete("username");

  //Rewrite URL
  if (pathname.startsWith("/gioi-thieu")) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }

  return response;
};

export const config = {
  //   matcher: ["/san-pham/:path*", "/auth/login/:path*"],
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
