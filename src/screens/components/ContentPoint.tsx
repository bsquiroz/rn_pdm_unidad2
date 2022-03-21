import React from 'react'
import { Text, View } from 'react-native'
import { Point1, Point2, Point3, Point4, Point5 } from '.'

interface PropsContentPoint {
	seePoint: string
}

export const ContentPoint = ({ seePoint }: PropsContentPoint) => {
	return (
		<>
			{seePoint === 'point1' ? (
				<Point1 />
			) : seePoint === 'point2' ? (
				<Point2 />
			) : seePoint === 'point3' ? (
				<Point3 />
			) : seePoint === 'point4' ? (
				<Point4 />
			) : seePoint === 'point5' ? (
				<Point5 />
			) : (
				<Text>Hola que mas</Text>
			)}
		</>
	)
}
