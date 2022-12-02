import { ReactNode } from "react"
import GestureRecognizer from "react-native-swipe-gestures"



function Swipe(props) {
	return (
		<GestureRecognizer
		onSwipeLeft={props.onSwipeLeft}
		onSwipeRight={props.onSwipeRight}
		>
			{props.children}
		</GestureRecognizer>
	)
}

export default Swipe