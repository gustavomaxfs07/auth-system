import { Button } from "./Button";

interface Props {
    title: string;
    subTitle: string;
    form: React.ReactNode;
    titleButton:string;
}

export function CardForm({title, subTitle, form, titleButton}: Props) {
    return (
        <article className="w-full max-w-md p-6 bg-white rounded-xl">
            <div>
                <h1 className="text-2xl font-bold text-gray-950 text-left pb-5">{title}</h1>
                <h2 className="text-xl text-gray-950 text-left pb-5">{subTitle}</h2>
            </div>

            <div>
                {form}
            </div>

            <Button children={titleButton} size={""} type={""}/>
        </article>
    );
}