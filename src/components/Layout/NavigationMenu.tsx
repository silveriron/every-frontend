import NavigationItem from "@/components/ui/NavigationItem";

export default function NavigationMenu() {
    return (
        <div
            className="flex justify-between items-center p-10"
        >
            <h1
                className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
            >Every</h1>
            <div
                className="flex gap-4"
            >
                <NavigationItem title="Home" href="/" />
                <NavigationItem title="Sign up" href="/signup" />
            </div>
        </div>
    )
}