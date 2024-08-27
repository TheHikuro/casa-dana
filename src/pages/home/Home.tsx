import { Listing } from './_components/listing'
import { CasaDana } from './_components/casa-dana'
import { Checklist } from './_components/checklist'
import { LosAlcazares } from './_components/los-alcazares'

export default function Home() {
  return (
    <div
      className={`bg-cover flex flex-col overflow-y-scroll h-full pb-10 px-5`}
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
    </div>
  )
}
