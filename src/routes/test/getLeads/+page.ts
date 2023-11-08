import type { PageLoad } from './$types'

export const load: PageLoad = async ({fetch}) => {
    const res = await fetch('/api/contractor-plus/lead')
    const leads = await res.json()
    return { leads }
}