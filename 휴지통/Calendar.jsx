// library
import { useCallback, useState } from "react"
import uuid from "react-native-uuid"


// component
import { Text, View, Pressable } from "react-native"
import NavButton from "./NavButton"
import { ScreenName, week, month } from "../type"
import Swipe from "./Swipe"


DayTextProps = {
	day: string,
	isFuture: boolean
}


function Calendar() {
	let today = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: new Date().getDay()
	}
	const [selectedYear, setSelectedYear] = useState(today.year)
	const [selectedMonth, setSelectedMonth] = useState(today.month)
	const dataTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()

	// my wish - slide to change
	const prevMonth = useCallback(() => {
		if (1 === selectedMonth) {
			setSelectedMonth(12)
			setSelectedYear(selectedYear - 1)
		} else {
			setSelectedMonth(selectedMonth - 1)
		}
	}, [selectedMonth])

	const nextMonth = useCallback(() => {
		if (12 === selectedMonth) {
			setSelectedMonth(1)
			setSelectedYear(selectedYear + 1)
		} else {
			setSelectedMonth(selectedMonth + 1)
		}
	}, [selectedMonth])

	const returnDate = useCallback(() => {
		let date = Array()
		for (const nowDay of week) {
			const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
			if (week[day] === nowDay) {
				for (let i = 0; i < dataTotalCount; i += 1) {
					let isFuture = new Date() < new Date(selectedYear, selectedMonth - 1, i + 1) ? true : false
					date.push(
						<Day key={i + 1}>
							<NavButton nav={ScreenName.DiaryWrite}
								today={{
									year: selectedYear,
									month: selectedMonth,
									date: i + 1,
									day: week[(day + i) % 7]
								}}
								disabled={isFuture}>
								<DayText day={week[(day + i) % 7]} isFuture={isFuture}>{i + 1}</DayText>
							</NavButton>
						</Day>
					)
				}
			} else {
				date.push(
					<Day key={`${uuid.v4()}`} />
				)
			}
		}
		return date
	}, [selectedYear, selectedMonth, dataTotalCount])

	return (
		<Container>
			<Year>{selectedYear}</Year>
			<Month>{month[selectedMonth - 1]}</Month>
			<Swipe
				onSwipeLeft={nextMonth}
				onSwipeRight={prevMonth}
			>
				<DayContainer>
					{returnDate()}
				</DayContainer>
			</Swipe>
		</Container>
	)
}

export default Calendar

/**
 * https://github.com/6810779s/calendar/blob/master/src/component/Calendar.js
 */