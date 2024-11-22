import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

// Example usage of the cn function in a functional component
const ExampleComponent = ({ className, children }) => {
  return (
    <div className={cn("p-4", "bg-gray-100", className)}>
      {children}
    </div>
  );
};

export default ExampleComponent;

