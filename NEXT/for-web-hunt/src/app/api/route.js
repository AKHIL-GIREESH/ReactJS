export async function GET(){
    return Response.json({status:"Success"})
}

export async function POST(request){
    let req = await request.json()
    console.log(req)
    return Response.json({status:"Success",body:req})
}