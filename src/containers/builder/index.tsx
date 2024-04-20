import { CardType } from "../../types";
import { FormProvider, useForm } from "react-hook-form";
import { BuilderSection } from "./BuilderSection";
// import { Accordion } from "flowbite-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export type BuilderForm = { [category in CardType]: string[] };

export const Builder = () => {
    const methods = useForm<BuilderForm>();
    return (
        <div>
            <FormProvider {...methods}>
                {/* <Accordion className="border-none m-5 rounded-lg">
                    <Accordion.Panel>
                        <BuilderSection category="objective" />
                    </Accordion.Panel>
                    <Accordion.Panel className="border-none">
                        <Accordion.Title className=" bg-gray-500 focus:bg-gray-500 hover:bg-gray-400 text-gray-100">
                            dasdasda
                        </Accordion.Title>
                        <Accordion.Content className="bg-gray-500">
                            saaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion> */}
                <Accordion type="single" collapsible className="m-5">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </FormProvider>
        </div>
    );
};
