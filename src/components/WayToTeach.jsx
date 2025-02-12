export default function WayToTeach({ title, description }) {
	return (
	  <li>
		<p>
		  <h4><strong><code >{title} </code></strong></h4>
		    <p style={{ textIndent: '50px'}}>{description}</p>
		  </p>
	  </li>
	)
    }