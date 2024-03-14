export const config = {
  runtime: 'edge',
};

export function GET(request: Request) {
  console.log(request.url)
  return new Response(JSON.stringify({res: `Hello from ${process.env.VERCEL_REGION}`}));
}
