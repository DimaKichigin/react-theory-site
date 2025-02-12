import WayToTeach from "./WayToTeach"
import { ways 	} from '../data'


export default function TeachingSection() {
	return (
		<section>
		 <h4 style={{ marginBottom: '10px'}}>Чем React отличается от других библиотек и фреймворков?</h4>
		 <ul>
		   {/* При использовании метода массиво map необходимо прописывать */}
		   {/* уникальное значение key={} */}
		   {/* этот параметр просто необходим для внутренеей работы реакта */}
		   {ways.map((way) => <WayToTeach key={way.title} {...way}/>)}
		   
		   {/* 2 первоначальный вариант */}
		   {/* <WayToTeach 
		     title={ways[0].title}
		     description={ways[0].description}
		   />
		    <WayToTeach {...ways[1]}/>
		    <WayToTeach {...ways[2]}/>
		    <WayToTeach {...ways[3]}/> */}
			  </ul>
			  </section>
	)
}