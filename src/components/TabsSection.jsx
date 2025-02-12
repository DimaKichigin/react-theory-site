import Button from "./Button/Button"

export default function TabsSection({ active, onChange }) {

	return (
		<section style={{marginBottom: '1rem', textAlign: 'center'}}>
			<Button isActive={active === 'theory'} onClick={() => onChange('theory')}>Теория</Button>
			<Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
			<Button isActive={active === 'comments'} onClick={() => onChange('comments')}>Комментарии</Button>
		</section>
	)
}