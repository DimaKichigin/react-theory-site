import TeachingSection from "./components/TeachingSection"
import ButtonSection from "./components/DifferencesSection"
import Header from "./components/Header/Header"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import { useState } from "react"
import FeedbackSection from "./components/FeedbackSection"
import CommentsSection from "./components/CommentsSection"
import { use } from "react"

export default function App() {
  const [visible, setVisivle] = useState(true)
  const [ tab, setTab ] = useState()

  return (
    <>
		 {visible && <Header/>}
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        
        { tab === 'theory' && (
        <>
        <ButtonSection />
        <TeachingSection />
        </>
        )}
        
        { tab === 'feedback' && <FeedbackSection />}
        { tab === 'comments' && <CommentsSection />}
      
      </main>
    </>
  )
}

