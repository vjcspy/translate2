import type {VercelRequest, VercelResponse} from '@vercel/node'
import {BASE_URL} from "../common/config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const data = req.body

    const customHeaders = {
        "Content-Type": "application/json",
    }

    const saveRes = await fetch(`${BASE_URL}/flag/save`, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(data),
    });

    // console.log(saveRes)

    return res.json({
        ok: true, downstream: {
            status: saveRes.status
        }
    })
}
