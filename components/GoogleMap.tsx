'use client'

import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
	width: '100%',
	height: '100%'
}

const center = {
	lat: 40.7128, // Replace with your bakery's latitude
	lng: -74.006 // Replace with your bakery's longitude
}

const mapOptions = {
	styles: [
		{
			featureType: 'all',
			elementType: 'geometry.fill',
			stylers: [{ weight: '2.00' }]
		},
		{
			featureType: 'all',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#9c9c9c' }]
		},
		{
			featureType: 'all',
			elementType: 'labels.text',
			stylers: [{ visibility: 'on' }]
		},
		{
			featureType: 'landscape',
			elementType: 'all',
			stylers: [{ color: '#f2f2f2' }]
		},
		{
			featureType: 'landscape',
			elementType: 'geometry.fill',
			stylers: [{ color: '#ffffff' }]
		},
		{
			featureType: 'landscape.man_made',
			elementType: 'geometry.fill',
			stylers: [{ color: '#ffffff' }]
		},
		{
			featureType: 'poi',
			elementType: 'all',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'road',
			elementType: 'all',
			stylers: [{ saturation: -100 }, { lightness: 45 }]
		},
		{
			featureType: 'road',
			elementType: 'geometry.fill',
			stylers: [{ color: '#eeeeee' }]
		},
		{
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#7b7b7b' }]
		},
		{
			featureType: 'road',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#ffffff' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'all',
			stylers: [{ visibility: 'simplified' }]
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.icon',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'transit',
			elementType: 'all',
			stylers: [{ visibility: 'off' }]
		},
		{
			featureType: 'water',
			elementType: 'all',
			stylers: [{ color: '#46bcec' }, { visibility: 'on' }]
		},
		{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [{ color: '#c8d7d4' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#070707' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#ffffff' }]
		}
	]
}

export default function GoogleMapComponent() {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) return <div className="h-full animate-pulse bg-gray-200"></div>

	return (
		<LoadScript
			googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
		>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
				options={mapOptions}
			>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	)
}
