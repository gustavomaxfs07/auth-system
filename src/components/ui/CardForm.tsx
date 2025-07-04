'use client';

import Link from "next/link";

interface Props {
    title: string;
    subTitle: string;
    form: React.ReactNode;
    forgotPassword:string;
    linkRouter:string;
}

export function CardForm({title, subTitle, form, forgotPassword, linkRouter}: Props) {
    return (
        <article className="w-full max-w-md p-6 bg-white rounded-xl">
            <div>
                <h1 className="text-2xl font-bold text-gray-950 text-left pb-5">{title}</h1>
                <h2 className="text-xl text-gray-950 text-left pb-5">{subTitle}</h2>
            </div>

            <div>
                {form}
            </div>

            <div className="flex justify-between pt-2 px-1">
                <p className="text-sm text-gray-950 text-left">I already have <Link className="font-medium text-gray-800 underline hover:no-underline" href={`/auth/${linkRouter}`}>{linkRouter}</Link></p>
                <p className="text-sm text-gray-950 text-left"><Link className="font-medium text-gray-800 underline hover:no-underline" href={`/auth/${linkRouter}`}>{forgotPassword}</Link></p>
            </div>
        </article>
    );
}