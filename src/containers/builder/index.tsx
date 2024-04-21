import { CardType } from "../../types";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { BuilderSection } from "./BuilderSection";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export type BuilderForm = { [category in CardType]: string[] };

export const Builder = () => {
    const methods = useForm<BuilderForm>({
        defaultValues: {
            objective: [],
            condition: [],
            deployment: [],
        },
    });
    return (
        <div className="p-2 md:px-6 flex justify-center w-full">
            <FormProvider {...methods}>
                <div className="w-full flex flex-col gap-2">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-gray-700 max-w-[1500px] w-full p-4 rounded-3xl"
                    >
                        <BuilderSection category="objective" />
                        <BuilderSection category="deployment" />
                        <BuilderSection category="condition" />
                    </Accordion>
                    <div className="flex w-full justify-center">
                        <SubmitButton />
                    </div>
                </div>
            </FormProvider>
        </div>
    );
};

const SubmitButton = () => {
    const { watch } = useFormContext<BuilderForm>();
    const data = watch();
    const { condition, objective, deployment } = data;
    const isValid = [condition, objective, deployment].every(
        (list) => list.length === 4
    );

    return (
        <Link
            disabled={!isValid}
            to="/picker"
            search={data}
            className="max-w-[200px] w-full"
        >
            <Button
                disabled={!isValid}
                type="submit"
                className="max-w-[200px] w-full"
            >
                Confirm
            </Button>
        </Link>
    );
};
