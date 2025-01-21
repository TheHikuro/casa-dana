import { CasaDana } from './_components/casa-dana'
import { LosAlcazares } from './_components/los-alcazares'
import { Activities } from './_components/activities'
import { Footer, FooterMobile } from '../../components'
import { useState } from 'react'

export default function Home() {
  const [windowSize] = useState(window.innerWidth)

  return (
    <>
      <div
        className={`bg-cover flex flex-col overflow-y-scroll h-full pb-7 px-5 overflow-x-hidden space-y-5`}
      >
        <section>
          <CasaDana />
        </section>
        <section>
          <LosAlcazares />
        </section>
        <section>
          <Activities />
        </section>
      </div>
      {windowSize < 640 ? <FooterMobile /> : <Footer />}
    </>
  )
}
