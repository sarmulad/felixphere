import React, { useState, useEffect, useContext } from 'react'
import { StageContext } from '../context/StageContext';

const Timer = () => {
	const stageContext = useContext(StageContext);

	const [ countDownTime, setCountDownTime ] = useState(false);
	const [ time, setTime ] = useState(Date.now());

	useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const getTimeRemaining = () => {
		const total = (new Date(countDownTime)).getTime() - (new Date()).getTime();
		if (!countDownTime) {
			return {
				weeks: '00',
				days: '00',
				hours: '00',
				minutes: '00',
				seconds: '00'
			}
		}
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		const days = Math.floor((total / 1000 / 60 / 60 / 24) % 7);
		const weeks = Math.floor((total / 1000 / 60 / 60 / 24 / 7));
		return {
			weeks: weeks < 10 ? '0' + weeks : weeks,
			days: days < 10 ? '0' + days : days,
			hours: hours < 10 ? '0' + hours : hours,
			minutes: minutes < 10 ? '0' + minutes : minutes,
			seconds: seconds < 10 ? '0' + seconds : seconds
		};
	}

	useEffect(() => {
		if (stageContext.stages) {
			if (stageContext.activeStage && stageContext.activeStage.end_date) {
				setCountDownTime(stageContext.activeStage.end_date);
			} else if (stageContext.stages.length > 0) {
				setCountDownTime(stageContext.stages[0].start_date);
			}
		}
	});

	const timer = getTimeRemaining();

	return (

		<div className="for_timer1" style={{height:"100px"}}>


			<div className="homeSlide Timer for--bg">
				<div className="">
					<div className="day">
					<h2 className="time">{timer.weeks}</h2>
					</div>
					<div className="week">
					<p>Weeks</p>
					</div>

				</div>
				<span className="" style={{color:"#FFCC00",
			    color: "rgb(255, 204, 0)",
				padding: "0px 10px 0px 10px",
				position: "relative",
				top: "50px",
				fontSize: "30px"}}>{" : "}</span>


				<div className="">
					<div className="day">
					<h2 className="time">{timer.days}</h2>
					</div>
					<div className="week">
					<p>Days</p>
					</div>

				</div>

				<span className="" style={{color:"#FFCC00",
			    color: "rgb(255, 204, 0)",
				padding: "0px 10px 0px 10px",
				position: "relative",
				top: "50px",
				fontSize: "30px"}}>{" : "}</span>



				<div className="">
					<div className="day">
					<h2 className="time">{timer.hours}</h2>
					</div>
					<div className="week">
					<p>Hours</p>
					</div>

				</div>

				<span className="" style={{color:"#FFCC00",
			    color: "rgb(255, 204, 0)",
				padding: "0px 10px 0px 10px",
				position: "relative",
				top: "50px",
				fontSize: "30px"}}>{" : "}</span>
				<div className="">
					<div className="day">
					<h2 className="time">{timer.seconds}</h2>
					</div>
					<div className="week">
					<p>Seconds</p>
					</div>

				</div>
				{/* <button onClick={onClickReset}>Reset</button> */}
			</div>

		


		</div>

	)
}

export default Timer;
