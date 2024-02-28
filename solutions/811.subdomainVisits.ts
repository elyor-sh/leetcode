
// https://leetcode.com/problems/subdomain-visit-count/description/

export function subdomainVisits(cpdomains: string[]): string[] {
    const map = new Map<string, number>()

    cpdomains.forEach(domain => {
        const sp = domain.split(' ')

        const count = parseInt(sp[0])
        const avDomains = availableDomains(sp[1])

        avDomains.forEach(dom => {
            const cachedCount = map.get(dom) || 0
            map.set(dom, count + cachedCount)
        })
    })

    const result: string[] = []

    for (const [key, value] of map){
        result.push(`${value} ${key}`)
    }

    return result
}

function availableDomains (str: string) {
    const domains: string[] = [str]

    const sp = str.split('.')

    if(sp.length > 2){
        domains.push(sp.slice(1, sp.length + 1).join('.'))
    }

    domains.push(sp[sp.length - 1])

    return domains
}