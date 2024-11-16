import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select.tsx'
import { useLang } from '../i18n/hook/useLang.tsx'
import { ACCEPTED_LANGUAGES } from '../utils/enum.ts'
import FrenchFlag from '../assets/langs/french.png'
import EnglishFlag from '../assets/langs/english.png'
import SpanishFlag from '../assets/langs/spain.png'

export function LangSelector() {
  const { handleChangeLanguage, currentLanguage } = useLang()

  const availableLanguages = {
    [ACCEPTED_LANGUAGES.EN]: EnglishFlag,
    [ACCEPTED_LANGUAGES.ES]: SpanishFlag,
    [ACCEPTED_LANGUAGES.FR]: FrenchFlag
  }

  return (
    <Select
      onValueChange={(value) =>
        handleChangeLanguage(value as ACCEPTED_LANGUAGES)
      }
    >
      <SelectTrigger className="bg-transparent border-none w-fit">
        <SelectValue
          placeholder={
            <>
              <img
                src={availableLanguages[currentLanguage as ACCEPTED_LANGUAGES]}
                alt={currentLanguage}
                className="w-8 h-6 mr-2"
              />
            </>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(ACCEPTED_LANGUAGES).map((lang, index) => (
            <SelectItem
              key={index}
              className="flex items-center space-x-2"
              value={lang}
            >
              <img
                src={availableLanguages[lang]}
                alt={lang}
                className="w-8 h-6"
              />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
