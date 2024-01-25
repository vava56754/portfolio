'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import clsx from "clsx";
const links = [{
    name: 'Accueil', href: '/'
},
{
    name: 'Projet', href: '/project'
},
{
    name: 'Musique', href: '/music'
}]

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link)=> {
            return (
                <Link key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-3 p-3 text-xl font-medium md:flex-none md:justify-center md:p-2 md:px-3',
                        {
                          'transition-all duration-200 ease-in-out border-b-4  border-black': pathname === link.href,
                        },
                      )}
                >
                    <p>{link.name}</p>
                </Link>
            )
        })}
        </>
    )
}