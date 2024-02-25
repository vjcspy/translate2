import type {VercelRequest, VercelResponse} from '@vercel/node'
import {BASE_URL} from "../common/config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const data = req.body

    if (typeof data !== 'object' || !data.hasOwnProperty('key') || !data.hasOwnProperty('value')){
        return res.status(400);
    }

    const customHeaders = {
        "Content-Type": "application/json",
    }

    const saveRes = await fetch(`${BASE_URL}/flag/save`, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
            key: data.key,
            value: data.value
        }),
    });

    // console.log(saveRes)

    return res.json({
        ok: true, downstream: {
            status: saveRes.status
        }
    })
}
