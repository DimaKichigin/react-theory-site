import classes from './Button.module.css'
import { useWithSound } from '../../hooks/useWithSound'
import click from './../../../public/najatie-knopki-zapuska-lunohoda.mp3'

export default function Button({ children, isActive, ...props }) {
	// let classes = 'button'

	// 1 способ генерации класса
	// isActive ? 'button active' : 'button'

	// 2 способ генерации класса
	// if (isActive) {
	// 	classes += ' active'
	// }

	const { playSound } = useWithSound(click)

	const handleButtonClick = () => {
		playSound();
	    }
	return (
		<button {...props} onMouseEnter={handleButtonClick} className={isActive ? `${classes.button} ${classes.active}` : classes.button} >{ children }</button>
	)
}