import Request from '@/util/Request'
import type { http } from '@/types/Response'
import type { Link } from '@/types/Link'

// 新增网站
export function addLinkListAPI(): http<Link[]> {
    return Request.instance.request({
        url: "/api/link"
    })
}

// 获取网站信息
export function getLinkDataAPI(id: string): http<Link[]> {
    return Request.instance.request({
        url: `/api/link/${id}`,
        params: id
    })
}

// 获取网站列表
export function getLinkListAPI(): http<Link[]> {
    return Request.instance.request({
        url: "/api/link"
    })
}