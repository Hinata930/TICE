import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/api/webhooks(.*)', '/'],

  afterAuth(auth, req, evt) {
    // 認証されてないユーザーが保護されているurlにアクセスしたらリクエストしてきたurlにリダイレクト
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // 認証されてるユーザーがPublicRouteにアクセスしたらhomeにリダイレクト
    if (auth.userId && auth.isPublicRoute) {
      const home = new URL('/home', req.url);
      return NextResponse.redirect(home);
    }
  },
  
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};