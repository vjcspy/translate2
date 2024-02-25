import type {VercelRequest, VercelResponse} from '@vercel/node'
import {BASE_URL} from "../common/config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const data = req.body
    const key = data.key
    const getRes = await fetch(`${BASE_URL}/flag/load?key=${key}`);

    // console.log(await getRes.text())

    return res.json(JSON.parse(await getRes.text()))
}
