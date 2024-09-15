import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  LineChart,
  Link,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href="#"
          className="bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:size-8 md:text-base"
        >
          <Package2 className="size-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="text-muted-foreground flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8"
            >
              <Home className="size-5" />
              <span className="sr-only">Dashboard</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8"
            >
              <ShoppingCart className="size-5" />
              <span className="sr-only">Orders</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Orders</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8"
            >
              <Package className="size-5" />
              <span className="sr-only">Products</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Products</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="text-muted-foreground flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8"
            >
              <Users2 className="size-5" />
              <span className="sr-only">Customers</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Customers</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="text-muted-foreground flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8"
            >
              <LineChart className="size-5" />
              <span className="sr-only">Analytics</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Analytics</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="text-muted-foreground flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8"
            >
              <Settings className="size-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default Sidebar;
