export async function GET(req){
    return new Response(JSON.stringify('hello world',req.query));
}