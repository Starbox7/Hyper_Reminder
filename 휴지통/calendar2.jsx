// library
import { useCallback, useState } from "react"
import uuid from "react-native-uuid"

// style
import styled from "styled-components/native"
import { RED, GRAY, BLUE, BLACK, vh, vw } from "./styles"

// component
import { Text, View, Pressable } from "react-native"
import Container from "./Container"
import NavButton from "./NavButton"
import { ScreenName, week, month } from "../type"
import Swipe from "./Swipe"

const Year = styled(Text)`
	font-size: 20px;
	color: ${BLACK};
`

const Month = styled(Text)`
	font-size: 30px;
	color: ${BLACK};
	margin-bottom: ${vh(5)}px;
`

const DayContainer = styled(View)`
	width: ${vw(91)}px;
	height: ${vw(13 * 6)}px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-flow: wrap;
`

const Day = styled(Pressable)`
	width: ${vw(13)}px;
	height: ${vw(13)}px;
	justify-content: flex-start;
	align-items: center;
`

type DayTextProps = {
	day: string
	isFuture?: boolean
}

const DayText = styled(Text) <DayTextProps>`
	width: ${vw(13)}px;
	height: ${vw(13)}px;
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => (
		true === props.isFuture ? GRAY :
			"일" === props.day ? RED :
				"토" === props.day ? BLUE :
					BLACK
	)}
`

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
		let date = Array() // == []
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
	}, [selectedYear, selectedMonth, dataTotalCount]) //함수 안에서 외부에서 변수를 끌어와 쓰려면 넣기

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







{/* <View style={style.calendar}>
                        {this.state.monthDays ? this.state.monthDays.map((el, index) => {
                            return (
                                el.map((sub, index) => {
                                    return (
                                        <View style={[style.dayView, this.state.weekLength === 4 ? style.week4 : this.state.weekLength === 5 ? style.week5 : this.state.weekLength === 6 ? style.week6 : null]} key={index.toString()}>
                                            <Text style={[style.dayText, sub.month !== 'cur' ? style.dayText2 : null]}>{sub.day} {sub.formatted}</Text>
                                        </View>
                                    )
                                })
                            )
                        }) : null}
                    </View> */}
                    {/* <Calendar style={styles.calendar} /> 
                     <Calendar
                        // Initially visible month. Default = Date()
                        current={date}
                        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                        minDate={2022+'-01-01'}
                        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                        maxDate={2022+'-12-31'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => { setDate(day.dateString) }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => { console.log('selected day', day) }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        monthFormat={'yyyy'+'년 '+'MM'+'월'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => { console.log('month changed', month) }}
                        // Hide month navigation arrows. Default = false
                        hideArrows={true}
                        // Replace default arrows with custom ones (direction can be 'left' or 'right')
                        renderArrow={(direction) => (<Arrow />)}
                        // Do not show days of other months in month page. Default = false
                        hideExtraDays={true}
                        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                        // day from another month that is visible in calendar page. Default = false
                        disableMonthChange={true}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={1}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={substractMonth => substractMonth()}
                        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                        onPressArrowRight={addMonth => addMonth()}
                        // Disable left arrow. Default = false
                        disableArrowLeft={true}
                        // Disable right arrow. Default = false
                        disableArrowRight={true}
                        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                        disableAllTouchEventsForDisabledDays={true}
                     Replace default month and year title with custom one. the function receive a date as parameter. 
                    //renderHeader={(date) => {/*Return JSX
                    /> 
                     <View style={{ alignContent: 'center', borderBottomColor: "#ddd", borderBottomWidth: 1, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>22</Text>
                            <Text>55</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>22</Text>
                            <Text>:</Text>
                            <Text>55</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>22</Text>
                            <Text>55</Text>
                        </View>
                    </View> */}



                    // const markedDates = posts.reduce((acc, current) => {
    //     const formattedDate = takeNow()
    //     acc[formattedDate] = {marked: true};
    //     return acc;
    //   }, {});

    // const [selectedDate, setSelectedDate] = useState(takeNow());

    // const markedSelectedDates = {
    //     [selectedDate]: {
    //       selected: true,
    //       marked: markedDates[selectedDate]?.marked,
    //     }
    //   }


    // const [date, setDate] = useState(takeNow())



    // LocaleConfig.locales['fr'] = {
//     monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
//     monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
//     dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
//     dayNamesShort: ['일', '월','화','수','목','금','토'],
//     today: 'Aujourd\'hui'
//   };
//   LocaleConfig.defaultLocale = 'fr';

//   function takeNow(){
//     let now = new Date();
//     let year = now.getFullYear();
//     let todayMonth = now.getMonth() + 1;
//     let todayDate = now.getDate();

//     if(todayMonth<10){
//         todayMonth="0"+todayMonth
//     }
//     if(todayDate<10){
//         todayDate="0"+todayDate
//     }

//     let date = year+'-'+todayMonth+'-'+todayDate
//     return date
//   }