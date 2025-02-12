import React from "react";

// export default function IntroSection() {
// 	return (
// 		<section>
// 			<h1 className="centered">Result University</h1>
// 			<h3 className="centered" style={{color: '#666'}}>
// 				Университет фронтенд-разработки, который насыщает IT-сферу квалифицированными программистами
// 				</h3>
// 		</section>
// 	)
// }
const e = React.createElement

export default function IntroSection() {
	return e('section', null, [
		e('h1', { className: 'centered', key: 1 }, 'База знаний по React' ),	
		e('h3', { className: 'centered', style: { margin: '0 auto', width: '600px', lineHeight: '35px', color: '#666', marginBottom: '20px'}, key: 2 }, 
			'JavaScript-библиотека для создания пользовательских интерфейсов'),
		])
	}