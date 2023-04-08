import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import accordionItems from './accordion-items/accordionItems'

export default function AccordionSection() {
  return (
    <section className="px-48 py-8 flex flex-col items-center bg-slate-200">
      <h2 className="font-bold text-2xl text-slate-900 mx-auto mb-8">
        Contabilidade na medida para a sua Empresa
      </h2>
      <div className="grid grid-cols-2">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          className="flex flex-col gap-4"
        >
          {accordionItems.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Header className="font-bold text-lg flex mb-2">
                <Accordion.Trigger className="flex h-8 flex-1 items-center justify-between ml-2 group cursor-pointer">
                  {item.header}
                  <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
                   transition-transform duration-300 
                   group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="text-justify overflow-hidden pr-10 pl-4 
                data-[state=open]:animate-slideDown 
                data-[state=closed]:animate-slideUp"
              >
                {item.content}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
