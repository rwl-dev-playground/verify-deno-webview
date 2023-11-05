/** @jsx h */
import { h } from 'preact';
import { renderToStaticMarkup } from 'preact-render-to-string';

const Layout = () => (
  <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <style>{`
        html {
          font-family: 游ゴシック
        }
      `}</style>
    </head>
    <body>
      <h1>Verify Deno Webview</h1>
      <p>このリポジトリはDenoでWebviewを作る検証のために作成されました。</p>
    </body>
  </html>
)

const handler = () => new Response(renderToStaticMarkup(<Layout />), {
  headers: {
    "Content-Type": "text/html"
  }
});

Deno.serve({
  port: 8080,
  handler,
});
