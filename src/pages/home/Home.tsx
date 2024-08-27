import { Listing } from './_components/listing'
import { CasaDana } from './_components/casa-dana'
import { Checklist } from './_components/checklist'
import { LosAlcazares } from './_components/los-alcazares'
import { Activities } from './_components/activities'
import { Footer } from '../../components/footer'

export default function Home() {
  return (
    <>
      <div
        className={`bg-cover flex flex-col overflow-y-scroll h-full pb-7 px-5 overflow-x-hidden space-y-5`}
      >
        <section>
          <CasaDana />
        </section>
        <section>
          <Checklist />
        </section>
        <section>
          <Listing />
        </section>
        <section>
          <LosAlcazares />
        </section>
        <section>
          <Activities />
        </section>
      </div>
      <Footer />
    </>
  )
}
