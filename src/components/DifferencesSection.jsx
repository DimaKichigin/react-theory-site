import Button from "./Button/Button"
import { useState } from "react"
import { differences } from "../data"
import './Differences.css'

export default function ButtonSection() {
	const [ contentType, setContentType ] = useState('Нажми на кнопку')

  function handleClick(type) {
    setContentType(type)
	}
  
  let tabContent = null

  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>
  } else {
    tabContent = <p>Нажми на кнопку</p>
  }
	
	return (
		<section >
		<h4 style={{ marginBottom: '10px'}}>Встроенные компоненты React</h4>
		<div className="differences-section__buttons">
		<Button isActive={contentType === 'fragment'} onClick={() => handleClick('fragment')}>Fragment</Button>
		<Button isActive={contentType === 'profiler'} onClick={() => handleClick('profiler')}>Profiler</Button>
		<Button isActive={contentType === 'suspense'} onClick={() => handleClick('suspense')}>Suspense</Button>
		<Button isActive={contentType === 'strictmode'} onClick={() => handleClick('strictmode')}>StrictMode</Button>
		<Button isActive={contentType === 'own'} onClick={() => handleClick('own')}>Ваши собственные компоненты</Button>
		</div>
		<p className="differences-section__text">{tabContent}</p>

		{/* {contentType ? (
		  <p>{differences[contentType]}</p>

		) : (
		  <p>Нажми на кнопку</p>
		)}

		 { !contentType ? <p>Нажми на кнопку</p> : null }
		 { contentType ? <p>{differences[contentType]}</p> : null }
	     
		 { !contentType && <p>Нажми на кнопку</p>}
		 { contentType && <p>{differences[contentType]}</p>} */}
	     
	 
	     </section>
	)
}