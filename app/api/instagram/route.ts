import { NextResponse } from 'next/server'

const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media'

export async function GET() {
	try {
		const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
		if (!accessToken) {
			throw new Error('Instagram access token is not set')
		}

		const response = await fetch(
			`${INSTAGRAM_API_URL}?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
		)

		if (!response.ok) {
			throw new Error('Failed to fetch Instagram data')
		}

		const data = await response.json()
		return NextResponse.json(data)
	} catch (error) {
		console.error('Error fetching Instagram data:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch Instagram data' },
			{ status: 500 }
		)
	}
}
