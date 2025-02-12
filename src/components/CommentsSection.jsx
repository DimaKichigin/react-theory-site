import { useState, useLayoutEffect, useEffect, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "../hooks/useInput"

export default function CommentsSection() {
	const input = useInput()
	const [modal, setModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [comments, setComments] = useState([])

	const fetchComments = useCallback(async () => {
		setLoading(true)
		const response = await fetch('https://jsonplaceholder.typicode.com/comments')
		const comments = await response.json()
		setComments(comments)
		setLoading(false)

	}, [])

	// Грубо говоря она помогает каждый раз не обновлять данные, 
	// например с использованием ассинхронной функции etchComments
	
	useEffect(() => {
		fetchComments()
	}, [fetchComments])

	function openModal() {
		setModal(true)
	}
	
	const listItems = comments
				
	.filter((comment) => comment.email.toLowerCase().includes(input.value.toLowerCase()))
	
	.map(comment =>
		<li key={comment.id}>
		  <h1 style={{fontSize: '20px'}}>
		  <b>Тема: {comment.name}</b>
		  </h1>
		  <p>
		    <b>{comment.email}: </b>
		    {comment.body}
		  </p>
		</li>
	    );


	return (
		<section>
			<h4 style={{marginBottom: '5px'}}>Комментарии пользователей сайта</h4>
			<Button style={{marginBottom: '20px'}} onClick={() => setModal(true)}>Нажми чтобы открыть</Button>
			<Modal open={modal}>
				<h3 style={{textAlign: 'center'}}>Справочная информация по комментариям</h3>
				<p style={{textAlign: 'center'}}>
					Все комментарии взяты из запроса к бэкенду с сайта:  
					<code>
					<a style={{color: 'green', textDecoration: 'none'}} href="https://jsonplaceholder.typicode.com/" target="_blank"> JSON Placeholder, </a>
					</code>
					и не имеют ничего общего с реальными
					людьми и существующими email адресами 🙂
				
				</p>
			<div  className="comments-button">

			<Button onClick={() => setModal(false)}>Закрыть</Button>
			</div>
			<span className="flag" style={{ position: 'absolute', cursor: 'pointer'}}>
			<img onClick={() => setModal(false)} width="40" height="40" src="./public/Krestiksvgpng.ru-1.svg" alt="cross" />
			</span>

			
			</Modal>
			{ loading && 
				<p>Loading...</p> 
				}
			{ !loading && (
				<>
				<h5 style={{marginBottom: '5px'}}>Поиск по Email:</h5>
				<input type="text" className="control" {...input}/>
				{/* <ul>
				{
					comments
					// .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
					.map((comment) => (
					
					<li key={comment.id}>{comment.email}</li>)
					
					)}
			</ul>  */}
			<ul>{listItems}</ul>
			</>
			)}
		</section>
	)
}