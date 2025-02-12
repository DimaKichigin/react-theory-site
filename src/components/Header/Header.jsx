import logo from '/icon.svg'
import { useEffect, useState } from "react"
import { styled } from 'styled-components'
import './Header.css'

const HeaderContainer = styled.header`
	position: relative;
	height: 50px;
	display: flex;
	padding: 0 2rem;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	background:rgb(17, 82, 131);`

export default function Header() {
	const [ now, setNow ] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date)
		}, 1000)

		return(() => {
			clearInterval(interval)
		})

	}, [])


	return (
		<HeaderContainer>
			<div className="logotype" >

			<a target="_blank" href="https://icons8.com/icon/8g6WJkjf0vaP/react">
				<img width="55" height="55" src={logo} alt="React" />
			</a>
			</div>
	  		<span className="time">Время сейчас {now.toLocaleTimeString()}</span>
		</HeaderContainer>
	)
    }