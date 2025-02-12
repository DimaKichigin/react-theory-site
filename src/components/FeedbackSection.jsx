import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
	const input = useRef()
// const [value, setValue] = useState('')
const [show, setShow] = useState(false)

function handleKeyDown(event) {
	// Отправка по клавише enter
	if (event.key === 'Enter') {
		setShow(true)
	}
}

	return (
		<div>
			<h1>{input.current ?.value}</h1>
			<h3 >Input value: {show && input.current.value} </h3>
			<input 
				ref={input}
				type="text" 
				className='control' 
				onKeyDown={handleKeyDown}
				/>
		</div>
	)
}


export default function FeedbackSection() {
	// Вместо вот такой портянки состояние можно переформировывать в объект
	// const [name, setName] = useState('')
	// const [hasError, setHasError] = useState(true)
	// const [reason, setReason] = useState('help')

	// Более гармоничное написание состояния
	const [form, setForm] = useState({
		name: '',
		hasError: false,
		reason: 'help'
	})

	// После перестройки состояния в объект - данную функцию тоже переписываем
	// function handleNameChange(event) {
	// 	setName(event.target.value)
	// 	setHasError(event.target.value.trim().length === 0)
	// }

	function handleNameChange(event) {
		setForm((prev) => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0
		}))
	}

	// Чисто для практики - инструмент для переключения ошибки
	// function toggleError() {
	// 	setHasError((prev) => !prev)
	// 	setHasError((prev) => !prev)
		
	// 	// Неправильное использование инструмента переключения ошибки
	// 	// Просто надо запомнить, что такие примеры кода надо оформлять как выше по правилам синтаксиса React
	// 	// setHasError(!hasError)
	// 	// setHasError(!hasError)
	// }

	return (
		<section>
			<h4>Обратная связь</h4>

			{/* <Button onClick={toggleError}>Toggle Error</Button> */}
			<form style={{ marginBottom: '1rem' }}>
				<label htmlFor="name">Ваше имя</label>
				<input 
				type="text" 
				id="name" 
				className="control" 
				value={form.name} 
				style={{
					border: form.hasError ? '1px solid red' : null,
				}}
				onChange={handleNameChange}/>
				
				<label htmlFor="reason">Причина обращения</label>
				<select 
				id="" 
				className="control" 
				value={form.reason} 
				onChange={(event) => setForm((prev) => ({ ...prev, reason: event.target.value }))}>
					<option value="error">Ошибка</option>
					<option value="help">Нужна помощь</option>
					<option value="suggest">Предложение</option>
				</select>
				
				{/* Первоначальный вариант вывода имени и причины */}
				{/* <pre>
					Name: {name}
					<br />
					Reason: {reason}
				</pre> */}
				<Button 
					disabled={form.hasError} 
					isActive={!form.hasError}
					>
						Отправить
				</Button>
			</form>
				{/* <StateVsRef /> */}
		</section>
	)
}