import {Button} from "@/components/ui/button";
import Link from "next/link";

interface NavigationItemProps {
    title: string;
    href: string;
}

export default function NavigationItem({
                                           title,
                                           href,
                                       }: NavigationItemProps) {

    return (
        <Link  href={href}>
            <Button variant="link" className="text-2xl font-bold">
                {title}
            </Button>
        </Link>
    )

}