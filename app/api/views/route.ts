import { redis } from "@/lib/redis";

export async function GET() {
  const views = await redis.incr("site_views");

  return Response.json({ views });
}